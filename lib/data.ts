import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Administrator',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('admin'),
      isAdmin: true,
    },
    {
      name: 'Example User',
      email: 'user@user.com',
      password: bcrypt.hashSync('user'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Mango',
      slug: 'mango-1',
      category: 'Fruits',
      image: '/images/orange.jpg',
      price: 30,
      brand: 'Fruits',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'Eng mazali mango faqat bizda!',
    },
    {
      name: 'Cherry',
      slug: 'cherry-1',
      category: 'Fruits',
      image: '/images/cherry.png',
      price: 24,
      brand: 'Fruits',
      rating: 4,
      numReviews: 5,
      countInStock: 200,
      description: 'Eng mazali giloslar faqat bizda!',
    },
    {
      name: 'Rukkoli',
      slug: 'rukoli-1',
      category: 'Plants',
      image: '/images/rukkoli.jpg',
      price: 40,
      brand: 'Plants',
      rating: 3.5,
      numReviews: 7,
      countInStock: 200,
      description: "Nima uchun rukkola superfud mahsulot sanalar ekan? Birinchidan, unda temir va kalsiy ko’p bo’lib, suyak va qon-tomirlar faoliyatlarini yaxshilasa, ikkinchidan, hujayralarni qarishini sustlashtiradi, suv va tuz muvozanatini me’yorlashtiradi, quvvatlantirib asablarni tinchlantiradi. ",
    },
    {
      name: 'Mongold',
      slug: 'mongold-1',
      category: 'Plants',
      image: '/images/mongold.jpg',
      price: 34,
      brand: 'Plants',
      rating: 3.5,
      numReviews: 7,
      countInStock: 200,
      description: "Chard - qimmatli ikki yillik o'simlik, salat-ismaloq o'simlik, lekin, afsuski, juda kamdan-kam hollarda etishtiriladi. Aytgancha, bu lavlagining eng qadimgi navi - stol lavlagining salafidir. Qadimgi rimliklar uni Rim karami deb atashgan va barglarini sharob va qalampirga solib iste'mol qilganlar. Chard kichik, yog'ochli ildiz va go'shtli barglari bo'lgan katta, pufakli barglarning rozetini hosil qiladi. Rozetkada chard inson tanasiga foydali ta'sir ko'rsatadigan noyob kimyoviy tarkibi tufayli beqiyos ozuqaviy qiymatga ega. Chard barglari biokimyoviy tarkibi bo'yicha ismaloqqa o'xshaydi , ammo ular tarkibida protein miqdori biroz yuqori va oksalat kislotasi yo'q. Karotin miqdori bo'yicha esa chard sabziga yaqin. Paqirning mineral tarkibi ham boy, ayniqsa kaliy va kaltsiyga boy.",
    },
    {
      name: 'Gobilar zoti (Bichki)',
      slug: 'bichki-1',
      category: 'Animals',
      image: '/images/bichki.jpg',
      price: 400,
      brand: 'Gobilar',
      rating: 3.5,
      numReviews: 7,
      countInStock: 200,
      description: "Bushuyev qoramol zoti — suti uchun boqiladigan zot. Oʻzbekistonning Mirzachoʻl (Sirdaryo viloyati) zonasida yetishtirilgan sersut va sermahsul qoramol. Bu zotni yaratishni M. M. Bushuyev jaydari (zebusimon) sigirlarni golland zotining buqasi bilan, soʻngra uni shvits zoti bilan murakkab chatishtirish orqali boshlab bergan (1903—18). Bushuyev qoramol zoti z. mollarining tusi oq, quloq va tumshuq atrofi qora yoki qizil, sigirlarining vazni 320–432 kg, buqalariniki 700–750 kg, yagʻrinidan oʻlchanganda balandligi 114—122 sm, tana uz. 139—159 sm, pocha aylanasi 15—17 sm, 300 kunlik sogʻim davrida 2400– 2600 kg, ayrimlari 3000 kg gacha sut beradi. Sutyogʻliligi 3,9—4,1%. 1948— 67 yillarda Oʻzbekiston chorvachilik ilmiy tadqiqot institutida zotni takomillashtirish ishlari davom ettirildi. 1967-yilda Mirzachoʻl zonasi uchun rayonlashtirilgan zot sifatida tasdiqlangan. Sirdaryo, Fargʻona, Samarqand, Surxondaryo viloyatlari xoʻjaliklarida koʻp boqiladi.",
    },
    {
      name: 'Simmental zoti',
      slug: 'simmentalniy-2',
      category: 'Animals',
      image: '/images/simmentalniy-2.jpg',
      price: 1200,
      brand: 'Simental',
      rating: 3.5,
      numReviews: 7,
      countInStock: 200,
      description: "Simmental qoramol zoti (nem. Simmental — Zimmental vodiysi nomidan) — sutgoʻsht yoʻnalishidagi qoramol zoti. Shveysariyada mahalliy va 5-asrda keltirilgan Skandinaviya qoramollarini yaxshilash yoʻli bilan chiqarilgan. Yevropa mamlakatlarida keng tarqalgan Simmental qoramol zotiz., asosan, mallaola, boshi va dumi uchi oq, yirik, tana tuzilishi mustahkam. Sigirlarining vazni 500–600 kg, buqalariniki 900– 1000 kg. Novvoslar boʻrdoqiga boqilganda tez semiradi, 12 oyligida 400– 420 kg, 18 oyligida 500–600 kg ga boradi. Yuqori sifatli goʻsht beradi. Soʻyim chiqimi 58—62%. Sigirlarning sut sogʻimi oʻrtacha 5000–6000 kg, yogʻlilikdarajasi 3,8—3,9%.3otning rekordchi sigirlari bir yilda 14—15 ming kg sut bergan. Simmental qoramol zotiz. oʻzining mahsuldorligi va turli iqlim sharoitlariga moslashganligi tufayli koʻpgina mamlakatlarga kesh: „tarqalgan. Rossiya va Ukrainaga 19-asrning boshlarida olib kelingan. ",
    },
  ],
}

export default data
