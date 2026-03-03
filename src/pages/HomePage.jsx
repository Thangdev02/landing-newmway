// pages/HomePage.jsx
import { Truck, CreditCard, Gift, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Leaf, Clock, Sparkles, UtensilsCrossed, Handshake, Telescope, Target } from "lucide-react";

export default function HomePage() {

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const missionItems = [
    "Cung cấp sản phẩm thớt gỗ Teak chất lượng cao, an toàn cho sức khỏe người dùng",
    "Nâng cao nhận thức của khách hàng về lợi ích của gỗ tự nhiên so với thớt nhựa/tre ép",
    "Góp phần thúc đẩy lối sống xanh – tiêu dùng bền vững thông qua sản phẩm gia dụng",
  ];
  const coreValues = [
    { icon: Leaf, title: "Tự nhiên & An toàn", desc: "100% gỗ Teak RỪNG TRỒNG, không hóa chất độc hại" },
    { icon: Clock, title: "Bền bỉ theo thời gian", desc: "Hạn chế cong vênh, không dăm mùn, dùng lâu dài" },
    { icon: Sparkles, title: "Tinh tế & thẩm mỹ", desc: "Thiết kế đẹp, vân gỗ sang trọng" },
    { icon: UtensilsCrossed, title: "Thực tế & hữu dụng", desc: "Phục vụ đúng nhu cầu nấu ăn hàng ngày" },
    { icon: Handshake, title: "Chân thật & minh bạch", desc: "Truyền thông đúng giá trị sản phẩm, không phóng đại" },
  ];
  const featuredBoards = [
    {
      name: "Thớt Gỗ Teak NEW M WAY Vuông Và Chữ Nhật Dày 38mm",
      desc: "Thớt gỗ teak New M Way được khai thác và sản xuất nguyên chất từ Gỗ rừng trồng Teak... ",
      price: "351.076 VND",
      image: "https://down-vn.img.susercontent.com/file/vn-11134201-23020-8g48kccrw2nvea@resize_w450_nl.webp",
    },
    {
      name: "Combo 2 sản phẩm thớt Thái và chặt gà vịt siêu tiết kiệm CB0104",
      desc: "Thớt gỗ teak New M Way được khai thác và sản xuất nguyên chất từ Gỗ rừng trồng Teak... ",
      price: "679.540 VND",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkwqe3hhc9ul1c@resize_w450_nl.webp",
    },
    {
      name: "Thớt Gỗ Teak NEW M WAY Đầu Cây Tròn 40cm Dày 3,8cm",
      desc: "Thớt gỗ teak New M Way được khai thác và sản xuất nguyên chất từ Gỗ rừng trồng Teak... ",
      price: "537.000 VND",
      image: "product3.webp",
    }
  ];

  const features = [
    {
      title: "Thủ Công Tinh Xảo",
      desc: "Mỗi sản phẩm được chế tác thủ công bởi nghệ nhân lành nghề",
      image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/481307583_122212351322035371_5662934436005414987_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=T9CKTcf-MtMQ7kNvwFNUYc4&_nc_oc=AdmuMtt2sN9BM3HTtnq9iPgnOloRD2g1dU6uJQNllBxOFRYo6_00WdVnZ7PzvxFXvRw&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=vQC1vdhUY8jP6MOH98TQ2g&oh=00_AfskQCMIwXoYt80B3sQNhn88Dbijb2lzVsHgjaXOyI_hug&oe=698531F9"
    },
    {
      title: "Bảo Vệ Dao Bếp",
      desc: "Bề mặt gỗ mềm giúp dao luôn sắc bén, không bị mòn",
      image: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/480276426_122211503480035371_5195881293699463982_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MHbM7DRG3KQQ7kNvwFrNye_&_nc_oc=AdlSuJOwxJE3I1MeyeFSHNivEynkc87QEUkkqvKGejmhtpUBAxZhFn575rwqOfcgsTg&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=JmYffbDIG37JHSzFsYEy2A&oh=00_AfsTiV-MU5-1lJWePtTXkJmNlsFcYkMO3Ir-l0JzxcQSaA&oe=69853B02"
    },
    {
      title: "An Toàn Thực Phẩm",
      desc: "100% tự nhiên, không chất hóa học độc hại",
      image: "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/480394366_122212351298035371_8328024427437774197_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ontBofOvVb0Q7kNvwF92EOo&_nc_oc=AdliXNk6DjfC3eZV8cc6NA9Qaq2JUTF11KrogQC6o5l1lrOYN5BR7ymZyXwQnRbxBJk&_nc_zt=23&_nc_ht=scontent.fsgn5-11.fna&_nc_gid=xMwBpPd1lNMvEIJ9VJ6UYg&oh=00_AfsekAPNN3XX_lOo61Md5pLjAWqEaft5wvVHu1ciBPcrUg&oe=69853253"
    }
  ];

  const feature = [
    { icon: Truck, text: "Giao hàng toàn quốc" },
    { icon: CreditCard, text: "Thanh toán đa dạng" },
    { icon: Gift, text: "Ưu đãi độc quyền trên app" },
    { icon: Headphones, text: "Hỗ trợ 24/7" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 relative">
      {/* 3D Cutting Board - nằm trên cùng */}

      {/* NEW HOME HERO WITH 3D */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmNWYxZWQiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-20 relative pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-amber-600 text-white text-xs font-bold tracking-wider rounded-full"
            >
              NEWMWAY TEAKWOOD
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ lineHeight: '6rem' }}
              className="text-5xl lg:text-7xl font-serif text-stone-900 leading-tight "
            >
              Nghệ Thuật <br />
              <span className="text-amber-700 ">Gỗ Teak</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg lg:text-xl text-stone-700 leading-relaxed max-w-xl"
            >
              Thớt gỗ cao cấp được chế tác thủ công từ gỗ teak ghép.
              Sự kết hợp hoàn hảo giữa thẩm mỹ và công năng cho gian bếp hiện đại.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 pointer-events-auto">
                <a href="https://newmwayteakwood.vn/product">Xem sản phẩm</a>
              </button>
              <button className="border-2 border-stone-900 text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-900 hover:text-white transition-all pointer-events-auto">
                <a href="https://newmwayteakwood.vn/info"> Tìm hiểu thêm</a>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">100%</div>
                <div className="text-sm text-stone-600">Tự nhiên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">7 Ngày </div>
                <div className="text-sm text-stone-600">Bảo hành 1 đổi 1</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-700">1000+</div>
                <div className="text-sm text-stone-600">Khách hàng</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Space (3D board will appear here) */}
          {/* Right Side - 3D Space (3D board will appear here) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full flex items-center justify-center"
          >
            <motion.img
              src="/pd1.png"
              alt="Teak Board"
              initial={{ y: 40, rotate: -4 }}
              animate={{
                y: [0, -20, 0],
                rotate: [-4, 4, -4]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full max-w-xl drop-shadow-2xl"
            />

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-12 bg-stone-400"></div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 lg:py-28 relative z-20 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.div className="inline-block px-4 py-2 bg-amber-600 text-white text-xs font-bold tracking-wider rounded-full mb-6">
              VỀ NEWMWAY
            </motion.div>
            <h2 className="font-serif text-4xl lg:text-6xl text-stone-900">
              Chúng tôi làm gì
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -6 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.04, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-amber-100 rounded-3xl blur-2xl opacity-60 -z-10"></div>
                <img
                  src="/pd2.png"
                  alt="Teak Cutting Board"
                  className="w-full max-w-lg object-contain drop-shadow-[0_20px_40px_rgba(120,80,20,0.2)]"
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="font-serif text-2xl lg:text-3xl text-stone-900">
                Thớt gỗ Teak – Từ rừng trồng đến gian bếp của bạn
              </h3>
              <p className="text-base lg:text-lg leading-relaxed text-stone-700">
                NEWMWAY chuyên sản xuất và cung cấp thớt gỗ teak ghép, bền đẹp
                và an toàn thực phẩm cho mọi gia đình Việt Nam.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-stone-600">
                Mỗi chiếc thớt được chế tác từ gỗ Teak rừng trồng đạt chuẩn,
                qua quy trình xử lý kỹ lưỡng — không hóa chất, không chất bảo quản
                độc hại — đảm bảo an toàn tuyệt đối cho sức khỏe người dùng.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-stone-600">
                Với vân gỗ tự nhiên sang trọng, bề mặt mịn màng bảo vệ lưỡi dao,
                và độ bền vượt trội theo thời gian, thớt NEWMWAY là người bạn đồng hành
                lý tưởng trong mỗi căn bếp hiện đại.
              </p>
              <motion.a
                href="https://newmwayteakwood.vn/product"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors shadow-md"
              >
                Khám phá sản phẩm
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* FEATURES & TECHNOLOGY SECTION */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 lg:py-32 bg-gradient-to-br from-stone-50 via-white to-amber-50 relative z-20 overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16 lg:mb-24">
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-amber-600 text-white text-xs font-bold tracking-wider rounded-full mb-6"
            >
              CÔNG NGHỆ HIỆN ĐẠI
            </motion.div>
            <h2 className="font-serif text-4xl lg:text-6xl mb-6 text-stone-900" style={{ lineHeight: '6rem' }}>
              Trải Nghiệm Mua Sắm <br className="hidden lg:block" />
              <span className="text-amber-700">Thông Minh</span>
            </h2>
            <p className="text-base lg:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              NEWMWAY mang đến giải pháp mua sắm toàn diện với công nghệ tiên tiến,
              giúp bạn dễ dàng tìm kiếm và sở hữu sản phẩm thớt gỗ yêu thích.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1: Shopping on App & Website */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-stone-900">
                Mua Hàng Đa Nền Tảng
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Truy cập và đặt hàng mọi lúc mọi nơi qua website hoặc ứng dụng di động.
                Giao diện thân thiện, dễ sử dụng trên mọi thiết bị.
              </p>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 text-sm text-amber-700 font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  App iOS & Android
                </div>
              </div>
            </motion.div>

            {/* Feature 2: AI Chatbot */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </motion.div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-stone-900">
                AI Chatbot Thông Minh
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Trợ lý ảo hỗ trợ tư vấn 24/7, giúp bạn tìm kiếm sản phẩm phù hợp.
                Tìm kiếm bằng hình ảnh - chỉ cần chụp ảnh, AI sẽ gợi ý ngay!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tìm kiếm bằng hình ảnh
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700 font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tư vấn tức thì
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Online Payment */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </motion.div>
              <h3 className="font-serif text-2xl lg:text-3xl mb-4 text-stone-900">
                Thanh Toán Linh Hoạt
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Đa dạng phương thức thanh toán online an toàn: thẻ ngân hàng,
                ví điện tử, chuyển khoản. Bảo mật tuyệt đối mọi giao dịch.
              </p>
              <div className="flex flex-wrap gap-2">

                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                  VNPay
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                  Banking
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                  Thanh Toán Khi Nhận Hàng
                </span>
              </div>
            </motion.div>
          </div>


        </div>
      </motion.section>
      {/* SHOP APP SECTION */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100 z-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text & Download Buttons */}
            <motion.div
              variants={fadeInLeft}
              className="space-y-8 relative z-20 pointer-events-auto"
            >
              <div className="space-y-4">
                <motion.div
                  variants={fadeInUp}
                  className="inline-block px-4 py-2 bg-amber-600 text-white text-xs font-bold tracking-wider rounded-full"
                >
                  MUA HÀNG NGAY
                </motion.div>
                <h2 className="font-serif text-4xl lg:text-6xl text-stone-900 leading-tight">
                  Đặt hàng dễ dàng <br className="hidden lg:block" />
                  qua Website & App
                </h2>
                <p className="text-base lg:text-lg text-stone-700 leading-relaxed">
                  Trải nghiệm mua sắm thớt gỗ cao cấp ngay trên điện thoại hoặc máy tính.
                  Thanh toán an toàn, giao hàng nhanh chóng, hỗ trợ 24/7.
                </p>
              </div>

              {/* Features List */}
              <div className="flex gap-14 mt-12">
                {feature.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover="hover"
                      className="relative flex flex-col items-center cursor-pointer group"
                    >
                      <motion.div
                        variants={{
                          hover: { y: -6, scale: 1.1 },
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-green-800"
                      >
                        <Icon size={36} />
                      </motion.div>

                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        variants={{
                          hover: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.25 }}
                        className="pointer-events-none absolute top-full mt-3 text-sm font-semibold text-gray-700 whitespace-nowrap"
                      >
                        {item.text}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Download Buttons */}
              <motion.div
                variants={fadeInUp}
                className="space-y-4 pt-6"
              >
                <p className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">
                  Tải ứng dụng ngay
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* App Store Button */}
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors shadow-lg pointer-events-auto"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-bold -mt-1">App Store</div>
                    </div>
                  </motion.a>

                  {/* Google Play Button */}
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors shadow-lg pointer-events-auto"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-lg font-bold -mt-1">Google Play</div>
                    </div>
                  </motion.a>
                </div>

                {/* Website Button */}
                <motion.a
                  href="https://newmwayteakwood.vn/"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-colors shadow-lg pointer-events-auto"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Mua hàng trên Website
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: App & Website Screenshots */}
            <motion.div
              variants={fadeInRight}
              className="relative z-20"
            >
              <div className="relative">
                {/* Desktop/Website Mockup in background */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-0 right-0 w-3/4 lg:w-2/3 z-10"
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-2 border-4 border-stone-200">
                    <div className="bg-stone-100 h-3 rounded-t-lg mb-2 flex items-center gap-1 px-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <img
                      src="./web.png"
                      alt="Website"
                      className="w-full h-64 rounded-lg object-cover"
                    />
                  </div>
                </motion.div>

                {/* Mobile App Mockup in foreground */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative z-20 w-2/3 lg:w-1/2 ml-0 mt-32 lg:mt-48"
                >
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="bg-stone-900 rounded-[3rem] p-3 shadow-2xl">
                      <div className="bg-white rounded-[2.5rem] overflow-hidden">
                        {/* Notch */}
                        <div className="bg-stone-900 h-8 rounded-b-3xl mx-auto w-1/2"></div>
                        {/* App Screenshot */}
                        <img
                          src="/app.png"
                          alt="Mobile App"
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>


        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      </motion.section>

      {/* FEATURED CUTTING BOARDS */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 lg:py-28 relative z-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-3xl lg:text-5xl mb-6 text-stone-900 text-center"
          >
            Các Sản Phẩm Thớt Nổi Bật
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-stone-600 mb-16 max-w-2xl mx-auto"
          >
            Tuyển chọn những mẫu thớt gỗ teak cao cấp, bền đẹp và an toàn cho gian bếp.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredBoards.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                className="rounded-3xl shadow-xl overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl mb-2 text-stone-900">{item.name}</h3>
                  <p className="text-sm text-stone-600 mb-4">{item.desc}</p>
                  <span className="inline-block font-semibold text-stone-800">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nút xem tất cả */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mt-14"
          >
            <motion.a
              href="https://newmwayteakwood.vn/product"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors duration-300 shadow-lg group"
            >
              Xem tất cả sản phẩm
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>



      {/* FEATURE SPLIT SECTION */}
      <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="py-20 lg:py-32 bg-gradient-to-br from-stone-50 via-white to-amber-50 relative z-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-amber-600 text-white text-xs font-bold tracking-wider rounded-full mb-6">
              VỀ CHÚNG TÔI
            </motion.div>
            <h2 className="font-serif text-4xl lg:text-6xl text-stone-900" style={{ lineHeight: '5rem' }}>
              Định hướng <span className="text-amber-700">phát triển</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <motion.div variants={fadeInLeft} whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-amber-500">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-700 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Telescope size={28} className="text-white" />
              </div>
              <h3 className="font-serif text-3xl mb-5 text-stone-900">Tầm Nhìn</h3>
              <p className="text-stone-600 leading-relaxed text-base lg:text-lg">
                Trở thành thương hiệu thớt gỗ Teak được tin dùng hàng đầu tại Việt Nam, đại diện cho phong cách sống <span className="font-semibold text-amber-700">tự nhiên – bền vững – tinh tế</span> trong gian bếp hiện đại.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-stone-600">
              <div className="w-14 h-14 bg-gradient-to-br from-stone-500 to-stone-800 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="font-serif text-3xl mb-5 text-stone-900">Sứ Mệnh</h3>
              <ul className="space-y-4">
                {missionItems.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.5 }} className="flex items-start gap-3 text-stone-600 text-sm lg:text-base leading-relaxed">
                    <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="font-serif text-3xl lg:text-5xl text-stone-900">Giá Trị Cốt Lõi</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center cursor-default"
                >
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
                    className="flex justify-center mb-4"
                  >
                    <Icon size={36} className="text-amber-600" />
                  </motion.div>
                  <h4 className="font-bold text-stone-900 text-sm mb-2 leading-snug">{val.title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* WOOD SHOWCASE */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="relative h-[350px] lg:h-[850px] overflow-hidden z-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/clt.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="relative h-full flex items-end">
          <div className="w-full backdrop-blur-sm bg-black/40 text-white py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
              <h3 className="font-serif text-3xl lg:text-5xl mb-4">Các loại thớt</h3>
              <p className="text-base lg:text-xl text-gray-200 font-light">
                Oval, gấu, xương cá...
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* LARGE PRODUCT SHOWCASE */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 lg:py-32 bg-stone-50 relative z-20"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl lg:text-6xl mb-8 text-stone-900"
          >
            Sản phẩm sinh thái
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base lg:text-lg mb-16 text-stone-600 max-w-3xl mx-auto leading-relaxed"
          >
            Thớt gỗ teak tự nhiên, chống mốc, chịu lực tốt và bền theo thời gian.
            Mỗi chiếc thớt đều mang vẻ đẹp độc đáo riêng biệt từ thiên nhiên.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src="/spst.jpg"
              alt="Thớt gỗ teak"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 lg:py-32 bg-stone-900 text-white relative z-20"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-4xl lg:text-6xl mb-16 text-center"
          >
            Khách hàng nói gì
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Nguyễn Minh Anh",
                role: "Chủ nhà hàng",
                text: "Thớt gỗ teak của NEWMWAY rất bền và đẹp. Đã dùng được 2 năm vẫn như mới!"
              },
              {
                name: "Trần Văn Hùng",
                role: "Đầu bếp chuyên nghiệp",
                text: "Chất lượng tuyệt vời, bề mặt mịn không làm tổn thương dao. Rất hài lòng!"
              },
              {
                name: "Lê Thị Mai",
                role: "Nội trợ",
                text: "Thớt đẹp và sang trọng, làm gian bếp nhà tôi trông cao cấp hẳn lên."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <div className="text-4xl mb-4 text-amber-400">"</div>
                <p className="text-base lg:text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* LOCATION */}
      <section className="grid md:grid-cols-2 h-[300px] lg:h-[450px] relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/final.jpg",
            }}
          />
          <div className="relative bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white p-8 lg:p-12 h-full flex flex-col justify-end">
            <h3 className="text-2xl lg:text-4xl font-serif mb-3">NEWMWAY TEAKWOOD</h3>
            <p className="text-sm lg:text-lg text-gray-300 font-light">Việt Nam</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.964130182879!2d106.70182039567204!3d10.737248012184759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9bcdf928d7%3A0xe8b955633ca8ebbe!2zS2h1IMSR4buLbmggY8awIFTDom4gUXV5IMSQw7RuZywgVMOibiBQaG9uZywgUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1769953693401!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
      </section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-stone-900 text-white py-12 lg:py-20 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider">NEWMWAY</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thớt gỗ teak New M Way được khai thác và sản xuất nguyên chất từ Gỗ rừng trồng Teak (tiếng việt gọi là Giá Tỵ) dùng để chế biến thực phẩm, đựng và trang trí thức ăn theo phong cách phương tây, dọn lên bàn cùng những món BBQ, Beefsteak...
                <br /> Thớt gỗ teak newway đã và đang có mặt trên khắp các căn bếp Mỹ, vậy thì ko có lí do j các bà nội trợ Việt còn chừng chừ khi chưa trải nghiệm sản phẩm giá trị này.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-amber-400 cursor-pointer transition-colors"> <a href="https://www.facebook.com/thotgoteak.newwayteakwood/"> Facebook</a></li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors"><a href="https://newmwayteakwood.vn/"> Website</a></li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Ứng Dụng</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: newmwayteakwood@gmail.com</li>
                <li>Hotline: 077 343 7979</li>
                <li>22 G1 KDC Tân Quy Đông, Đường 63, Phường Tân Phong, Quận 7, Hồ Chí Minh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm lg:text-base tracking-wider mb-2">© 2026 NEWMWAY TEAKWOOD</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}