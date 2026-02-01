// pages/WelcomePage.jsx
import { motion } from "framer-motion";

export default function WelcomePage({ onExplore }) {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* WELCOME HERO */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/481664392_1043236774512661_124410764154567820_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IOWU2xGPzAoQ7kNvwF3M5dC&_nc_oc=AdlqKtln_bSIJsshbkp9nVttzj_VdutN1HSb0OJqG801Tt16ljNCMkb54MGBWfT3tbU&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=g3CudHb-tffKo-DncpOfKQ&oh=00_Afv4BEoM-De0uKnk2ZEedD3R_alJMUApSWVskEOmJNZI5Q&oe=6984F18D)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full flex items-center justify-center text-center px-6"
        >
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs lg:text-sm tracking-[0.4em] text-amber-300 mb-6 font-light"
            >
              NEWMWAY TEAKWOOD
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl lg:text-7xl xl:text-8xl font-serif text-white mb-6 leading-tight"
            >
              THỚT GỖ CAO CẤP
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-base lg:text-xl text-gray-100 mb-10 font-light"
            >
              Chuyên cung cấp sản phẩm đồ dùng nhà bếp cao cấp
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05, borderColor: '#d4a574', color: '#d4a574' }}
              onClick={onExplore}
              className="border-2 border-white text-white px-10 py-4 rounded-full text-sm lg:text-base font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              Khám phá ngay
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}