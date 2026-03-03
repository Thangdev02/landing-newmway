import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, ShoppingBag, ArrowUpRight } from "lucide-react";

const API_URL = "https://chatbot.newmwayteakwood.vn/chat";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Xin chào — tôi có thể giúp bạn tìm thớt gỗ Teak phù hợp.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text, timestamp: new Date() }]);
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, {
        role: "bot",
        text: data.response,
        products: data.products,
        timestamp: new Date(),
      }]);
    } catch {
      setMessages((prev) => [...prev, {
        role: "bot",
        text: "Có lỗi xảy ra, vui lòng thử lại.",
        timestamp: new Date(),
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (d) =>
    d.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });

  const quickReplies = [
    "Thớt nào phù hợp cho bếp gia đình?",
    "Gỗ Teak có ưu điểm gì?",
    "Cách vệ sinh và bảo quản?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col overflow-hidden"
            style={{
              width: "360px",
              maxHeight: "560px",
              background: "#faf8f4",
              border: "1px solid #e5ddd0",
              borderRadius: "16px",
              boxShadow: "0 8px 40px rgba(80,50,20,0.13), 0 1px 4px rgba(80,50,20,0.07)",
            }}
          >
            {/* Header — không gradient, không icon robot */}
            <div
              style={{
                background: "#1c1712",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {/* Logo text thay vì icon */}
                  <span style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#f5ede0",
                    letterSpacing: "0.08em",
                  }}>
                    NEWMWAY
                  </span>
                  <span style={{
                    fontSize: "10px",
                    color: "#a89070",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    paddingTop: "1px",
                  }}>
                    Teakwood
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                  <span style={{
                    width: "6px", height: "6px",
                    background: "#7db87d",
                    borderRadius: "50%",
                    display: "inline-block",
                  }} />
                  <span style={{ fontSize: "11px", color: "#7a6a58" }}>AI hỗ trợ trực tuyến</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{
                  width: "28px", height: "28px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  color: "#7a6a58",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
              >
                <X size={13} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto min-h-0"
              style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: msg.role === "user" ? "flex-end" : "flex-start",
                    gap: "4px",
                  }}
                >
                  {/* Sender label */}
                  <span style={{
                    fontSize: "10px",
                    color: "#b09a80",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    paddingLeft: msg.role === "user" ? 0 : "2px",
                  }}>
                    {msg.role === "user" ? "Bạn" : "Newmway"}
                  </span>

                  <div style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    fontSize: "13.5px",
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    ...(msg.role === "bot" ? {
                      background: "#ffffff",
                      border: "1px solid #e8dfd0",
                      borderRadius: "4px 14px 14px 14px",
                      color: "#2d2418",
                    } : {
                      background: "#2d2418",
                      borderRadius: "14px 4px 14px 14px",
                      color: "#f5ede0",
                    })
                  }}>
                    {msg.text}
                  </div>

                  {/* Products */}
                  {msg.products && msg.products.length > 0 && (
                    <div style={{ width: "100%", maxWidth: "80%", display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
                      {msg.products.map((p, pi) => (
                        <div key={pi} style={{
                          background: "#fff",
                          border: "1px solid #e8dfd0",
                          borderRadius: "10px",
                          padding: "10px 12px",
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}>
                          {p.image && (
                            <img src={p.image} alt={p.name} style={{ width: "44px", height: "44px", borderRadius: "6px", objectFit: "cover", flexShrink: 0 }} />
                          )}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ fontSize: "12px", fontWeight: "600", color: "#2d2418", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.name}</p>
                            {p.price && <p style={{ fontSize: "11px", color: "#a06a2a", fontWeight: "700", marginTop: "2px" }}>{p.price}</p>}
                          </div>
                          <ShoppingBag size={13} style={{ color: "#c09060", flexShrink: 0 }} />
                        </div>
                      ))}
                    </div>
                  )}

                  <span style={{ fontSize: "10px", color: "#c4b09a" }}>{formatTime(msg.timestamp)}</span>
                </motion.div>
              ))}

              {/* Typing */}
              {loading && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "10px", color: "#b09a80", letterSpacing: "0.06em", textTransform: "uppercase" }}>Newmway</span>
                  <div style={{
                    background: "#fff",
                    border: "1px solid #e8dfd0",
                    borderRadius: "4px 14px 14px 14px",
                    padding: "12px 16px",
                    display: "flex", gap: "5px", alignItems: "center",
                  }}>
                    {[0, 1, 2].map((n) => (
                      <motion.span
                        key={n}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: n * 0.2 }}
                        style={{ width: "5px", height: "5px", background: "#c09060", borderRadius: "50%", display: "inline-block" }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && (
              <div style={{ padding: "0 16px 12px", display: "flex", flexWrap: "wrap", gap: "6px", flexShrink: 0 }}>
                {quickReplies.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => { setInput(q); inputRef.current?.focus(); }}
                    style={{
                      fontSize: "11px",
                      padding: "5px 10px",
                      background: "transparent",
                      border: "1px solid #d4c4b0",
                      borderRadius: "20px",
                      color: "#7a5c3a",
                      cursor: "pointer",
                      transition: "all 0.15s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#f0e8dc"; e.currentTarget.style.borderColor = "#b09070"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#d4c4b0"; }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div style={{
              padding: "12px 16px",
              borderTop: "1px solid #e8dfd0",
              flexShrink: 0,
              background: "#faf8f4",
            }}>
              <div style={{
                display: "flex",
                gap: "8px",
                alignItems: "flex-end",
                background: "#fff",
                border: "1px solid #d8cfc0",
                borderRadius: "10px",
                padding: "8px 8px 8px 14px",
              }}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Nhắn tin..."
                  rows={1}
                  style={{
                    flex: 1,
                    resize: "none",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "13.5px",
                    color: "#2d2418",
                    fontFamily: "inherit",
                    lineHeight: "1.5",
                    maxHeight: "72px",
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  style={{
                    width: "30px",
                    height: "30px",
                    background: input.trim() && !loading ? "#2d2418" : "#e8dfd0",
                    border: "none",
                    borderRadius: "7px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: input.trim() && !loading ? "pointer" : "default",
                    transition: "background 0.15s",
                    flexShrink: 0,
                  }}
                >
                  {loading
                    ? <Loader2 size={13} style={{ color: "#b09a80", animation: "spin 1s linear infinite" }} />
                    : <ArrowUpRight size={14} style={{ color: input.trim() ? "#f5ede0" : "#b09a80" }} />
                  }
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button — không gradient rẻ tiền */}
     {/* Toggle button */}
<motion.button
  onClick={() => setOpen((v) => !v)}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.94 }}
  style={{
    width: "52px",
    height: "52px",
    background: "#1c1712",
    border: "1px solid #3a3028",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "relative",
    boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
  }}
>
  <AnimatePresence mode="wait">
    {open ? (
      <motion.span
        key="x"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 45 }}
        transition={{ duration: 0.15 }}
      >
        <X size={18} color="#f5ede0" />
      </motion.span>
    ) : (
      <motion.span
        key="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <img
          src="/logopng2.png"
          alt="NEWMWAY"
          style={{
            width: "52px",
            height: "52px",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
        />
      </motion.span>
    )}
  </AnimatePresence>

  {!open && (
    <span style={{
      position: "absolute", top: "-3px", right: "-3px",
      width: "10px", height: "10px",
      background: "#7db87d",
      borderRadius: "50%",
      border: "2px solid #fff",
    }} />
  )}
</motion.button>
    </div>
  );
}