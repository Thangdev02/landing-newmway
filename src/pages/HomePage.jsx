import { Truck, CreditCard, Gift, Headphones } from "lucide-react";
import { motion } from "framer-motion";

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

  const woodTypes = [
    { 
      icon: "🌲", 
      name: "GỖ TEAK", 
      desc: "Gỗ teak nguyên khối, bền đẹp, chống nước tuyệt đối"
    },
    { 
      icon: "🪵", 
      name: "GỖ SỒI", 
      desc: "Gỗ sồi chất lượng cao, vân gỗ đẹp tự nhiên"
    },
    { 
      icon: "🌳", 
      name: "GỖ WALNUT", 
      desc: "Gỗ óc chó cao cấp, màu sắc sang trọng"
    },
    { 
      icon: "🎋", 
      name: "GỖ TRE", 
      desc: "Tre ép đa tầng, thân thiện môi trường"
    }
  ];

  const features = [
    {
      title: "Thủ Công Tinh Xảo",
      desc: "Mỗi sản phẩm được chế tác thủ công bởi nghệ nhân lành nghề",
      image: "https://scontent.fvkg1-1.fna.fbcdn.net/v/t39.30808-6/480624049_1043236644512674_6705222740023721446_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SSlvSLNh24gQ7kNvwEKUOkr&_nc_oc=Adn8BXrFzBVpaMHFjpyksH1oCRwo6hdddxpuTL5gGOarmYTGxoAa2uvdSBfeg4RaHojP_huw46mLmUVsfTahLTNz&_nc_zt=23&_nc_ht=scontent.fvkg1-1.fna&_nc_gid=d6E3Ei3dfOEKGwZWE8LkxQ&oh=00_Afrh42WOo0kl4MOoN15iA03j-oIuKIMMrtOT6J2FqAm2AQ&oe=697ED311"
    },
    {
      title: "Bảo Vệ Dao Bếp",
      desc: "Bề mặt gỗ mềm giúp dao luôn sắc bén, không bị mòn",
      image: "https://scontent.fvkg1-1.fna.fbcdn.net/v/t39.30808-6/481477715_1043236504512688_8111090880355841662_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AK_7V5MjaXAQ7kNvwG604lJ&_nc_oc=AdlNiDEdxaIuM6rWcOLzQFKvMchZ_mTl8ZqU5wKq5XTEFDH1xG9GBxwzzBjeIqBJ7BgRRviko-xyhDm1xChYqbv1&_nc_zt=23&_nc_ht=scontent.fvkg1-1.fna&_nc_gid=APWbV5zAMOZZnGvk4l2Fmg&oh=00_AfqsUubnEMVLnn_R9Xs0bneDVjXn63nq6SlheIgaiVU2AA&oe=697EED89"
    },
    {
      title: "An Toàn Thực Phẩm",
      desc: "100% tự nhiên, không chất hóa học độc hại",
      image: "https://scontent.fvkg1-1.fna.fbcdn.net/v/t39.30808-6/480925500_1041991044637234_5881159900061214901_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FDPXYo1zBpgQ7kNvwGu9JUQ&_nc_oc=AdnK5VJKhxfqmBCPlPaxB1jLNMtUMf7UEczSOTI8ZgyzQ2PqTI_waWTzq45p7wauLCDTl0g8GGIuHTDmdBqFkjzF&_nc_zt=23&_nc_ht=scontent.fvkg1-1.fna&_nc_gid=tznrLlC_tZG6C7nK42U2UA&oh=00_AfrqrEAKp8HfhUt5gx7DRGANWX8SwuMBEZA7l1o1RSONSw&oe=697ED8E7"
    }
  ];

  const feature = [
  { icon: Truck, text: "Giao hàng toàn quốc" },
  { icon: CreditCard, text: "Thanh toán đa dạng" },
  { icon: Gift, text: "Ưu đãi độc quyền trên app" },
  { icon: Headphones, text: "Hỗ trợ 24/7" },
];

  const products = [
    {
      name: "Thớt Tròn Classic",
      size: "Ø30cm x 2.5cm",
      price: "850.000đ",
      image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261"
    },
    {
      name: "Thớt Chữ Nhật Premium",
      size: "40cm x 30cm x 3cm",
      price: "1.250.000đ",
      image: "https://images.unsplash.com/photo-1615671524827-c1fe3973b648"
    },
    {
      name: "Thớt Vuông Deluxe",
      size: "35cm x 35cm x 3.5cm",
      price: "1.450.000đ",
      image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb"
    },
    {
      name: "Bộ Thớt Gia Đình",
      size: "Set 3 món",
      price: "2.850.000đ",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-stone-900 text-white sticky top-0 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-xl lg:text-2xl font-bold tracking-widest"
          >
            NEWMWAY
          </motion.span>
          <div className="hidden md:flex gap-10 text-sm lg:text-base">
            {['Trang chủ', 'Sản phẩm', 'Về chúng tôi', 'Liên hệ'].map((item) => (
              <motion.span
                key={item}
                whileHover={{ scale: 1.05, color: '#d4a574' }}
                className="cursor-pointer transition-colors font-medium"
              >
                {item}
              </motion.span>
            ))}
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="relative h-[500px] lg:h-[800px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://scontent.fvkg1-1.fna.fbcdn.net/v/t39.30808-6/481477715_1043236504512688_8111090880355841662_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AK_7V5MjaXAQ7kNvwG604lJ&_nc_oc=AdlNiDEdxaIuM6rWcOLzQFKvMchZ_mTl8ZqU5wKq5XTEFDH1xG9GBxwzzBjeIqBJ7BgRRviko-xyhDm1xChYqbv1&_nc_zt=23&_nc_ht=scontent.fvkg1-1.fna&_nc_gid=M7TCTU2nuyJq2KKXVqvBNw&oh=00_AfonBLMZUM6KYVeKyFYCfJA33-W4cqlW2jFdCvEl7MCgBg&oe=697EED89)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="whileInView"
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
              className="border-2 border-white text-white px-10 py-4 rounded-full text-sm lg:text-base font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Khám phá ngay
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 lg:py-32 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-4xl lg:text-6xl mb-16 text-stone-900 text-center"
          >
            Chúng tôi làm gì
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div variants={fadeInUp} className="space-y-5">
              <div className="w-20 h-0.5 bg-amber-600" />
              <p className="text-base lg:text-lg leading-relaxed text-stone-700">
                NEWMWAY chuyên sản xuất và cung cấp thớt gỗ teak nguyên khối, bền đẹp,
                chống nước và an toàn thực phẩm cho mọi gia đình.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-5">
              <div className="w-20 h-0.5 bg-amber-600" />
              <p className="text-base lg:text-lg leading-relaxed text-stone-700">
                Sản phẩm được xử lý thủ công, giữ vân gỗ tự nhiên, sang trọng và phù
                hợp từ bếp nhà đến nhà hàng cao cấp.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SHOP APP SECTION - NEW */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-amber-50 to-stone-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text & Download Buttons */}
            <motion.div
              variants={fadeInLeft}
              className="space-y-8"
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
                    className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors shadow-lg"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
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
                    className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-stone-800 transition-colors shadow-lg"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
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
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-colors shadow-lg"
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
              className="relative"
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
                      className="w-full h-64 rounded-lg"
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
                        <div className="bg-stone-900 h-6 rounded-b-3xl mx-auto w-1/2"></div>
                        {/* App Screenshot */}
                        <img
                          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop"
                          alt="Mobile App"
                          className="w-80 h-96"
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

      {/* WOOD TYPES */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-3xl lg:text-5xl mb-6 text-stone-900 text-center"
          >
            Các Loại Gỗ
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-stone-600 mb-16 max-w-2xl mx-auto"
          >
            Chúng tôi sử dụng các loại gỗ cao cấp nhất để đảm bảo chất lượng sản phẩm
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {woodTypes.map((wood, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="text-center p-6 lg:p-8 bg-stone-50 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl lg:text-6xl mb-4">{wood.icon}</div>
                <h3 className="font-serif text-lg lg:text-xl mb-3 text-stone-900">{wood.name}</h3>
                <p className="text-xs lg:text-sm text-stone-600 leading-relaxed">{wood.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FEATURE SPLIT SECTION */}
      <section className="py-20 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32 ${
                index === features.length - 1 ? 'mb-0' : ''
              }`}
            >
              <motion.div
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[300px] lg:h-[450px] object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
              <motion.div
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
              >
                <div className="w-16 h-1 bg-amber-600" />
                <h3 className="font-serif text-3xl lg:text-5xl text-stone-900">
                  {feature.title}
                </h3>
                <p className="text-base lg:text-lg text-stone-700 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WOOD SHOWCASE */}
      <motion.section 
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="relative h-[350px] lg:h-[550px] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="relative h-full flex items-end">
          <div className="w-full backdrop-blur-sm bg-black/40 text-white py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
              <h3 className="font-serif text-3xl lg:text-5xl mb-4">Các loại thớt</h3>
              <p className="text-base lg:text-xl text-gray-200 font-light">
                Vuông – Tròn – Nguyên khối – Khắc logo theo yêu cầu
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
        className="py-20 lg:py-32 bg-stone-50"
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
              src="https://scontent.fvkg1-1.fna.fbcdn.net/v/t39.30808-6/481473688_1043236541179351_6460517332075203376_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=faYDOaLRvKwQ7kNvwEvE975&_nc_oc=AdkrCCj93d1c-y32MryyFGGFBzn_wTDgJUxEh2OSMKq4RyV2GQRmQ86l6-Y_EKgcSZs34MUHbnmz5qZJYpb7-9US&_nc_zt=23&_nc_ht=scontent.fvkg1-1.fna&_nc_gid=LFciI82GbIn_dSUThE5hZg&oh=00_AfpSTw2ZhM54-rpSZqAa3BDLNHW6KxO1JaAkFJclt2utFQ&oe=697EC258"
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
        className="py-20 lg:py-32 bg-stone-900 text-white"
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
      <section className="grid md:grid-cols-2 h-[300px] lg:h-[450px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://scontent.fvkg1-1.fna.fbcdn.net/v/t1.6435-9/127662406_3710255295693638_4594713628425318961_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=39nV_7Dg4JAQ7kNvwE-ehQV&_nc_oc=Adm1D0_K6DwQ-c0FgIyQHd6lfrjqlcsou_4c83Gw3sIwX6TjztZvxmAwlGjxJ8LPMAgZYboCWGeReRwUjG5rQcBB&_nc_zt=23&_nc_ht=scontent.fvkg1-1.fna&_nc_gid=HKUsZQelSaC1v2Tbc5aqrA&oh=00_Afo10jaSBNShHp0aDHMAtf7LjdnWOBJInyxmtK6CaO_D7A&oe=69A06297)",
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
            className="w-full h-full grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
            src="https://maps.google.com/maps?q=ho%20chi%20minh&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Location Map"
          />
        </motion.div>
      </section>

      {/* FOOTER */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-stone-900 text-white py-12 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider">NEWMWAY</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thớt gỗ cao cấp cho gian bếp hiện đại
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Về chúng tôi</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Sản phẩm</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Bảo hành</li>
                <li className="hover:text-amber-400 cursor-pointer transition-colors">Liên hệ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@newmway.vn</li>
                <li>Hotline: 0123 456 789</li>
                <li>Địa chỉ: TP. Hồ Chí Minh</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm lg:text-base tracking-wider mb-2">© 2026 NEWMWAY TEAKWOOD</p>
            <p className="text-xs lg:text-sm text-gray-400 font-light">Crafted with passion for quality</p>
          </div>
        </div>
      </motion.footer>

    </div>
  );
}