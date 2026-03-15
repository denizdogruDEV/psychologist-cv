// CV Data
const cvData = {
  personalInfo: {
    name: "Merve Ulcay",
    title: "Psikolog",
    profileImage: "images/profile.png",
    bio: `Merhaba, burada bugüne kadar almış olduğum eğitimler hakkında bilgiler bulacaksınız. Ben Ege Üniversitesi Psikoloji Bölümü mezunuyum. Yüksek lisansımı da Ege Üniversitesi Psikolojik Danışmanlık ve Rehberlik Bölümünde tamamladım.

Abdülkadir Özbek Psikodrama Dernekleri Federasyonu'nda 948 birim olan psikodrama eğitim sürecini "Psikodramanın Yetişkinlerin Benlik Algısına Ve İdeal Benliğine Etkisi" yeterlilik tezini vererek 2018 yılında bitirdim.`,
    contact: {
      email: "dominopsikoloji@gmail.com",
      phone: "+90 5331462662",
      website: "https://merveulcay.com"
    }
  },
  education: [
    {
      id: 1,
      degree: "Psikolojik Danışman",
      school: "Ege Üniversitesi",
      year: "2015"
    },
    {
      id: 2,
      degree: "Psikoloji",
      school: "Ege University",
      year: "2011"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Uluslararası Travma Programı İleri Düzey",
      issuer: "World Human Relief",
      year: "2022"
    },
    {
      id: 2,
      title: "WISC 4 Zeka Testi Uygulayıcı Eğitimi",
      issuer: "İzmir Türk Psikologlar Derneği",
      year: "2016"
    }
  ],
  workshops: [
    {
      id: 1,
      title: "Dinamik Psikoterapi Eğitimi",
      organizer: "Eğitici: Doğan Şahin",
      year: "2025"
    },
    {
      id: 2,
      title: "Psikodinamik Destekleyici Psikoterapi Eğitimi",
      organizer: "Eğitici: Cem Kaptanoğlu",
      year: "2025 - Halen"
    }
  ],
  experience: [
    {
      id: 1,
      title: "Empati Becerileri üzerine Psikodrama Çalışması - Eğitici Eğitimi",
      organization: "İzmir Tınaztepe Üniversitesi Sağlık Hizmetleri Meslek Yüksek Okulu",
      year: "2025"
    },
    {
      id: 2,
      title: "Psikodramaya İlk Bakış Uygulamalı Atölye",
      organization: "GİPDER İzmir Akademik Etkinlik",
      year: "2025"
    },
    {
      id: 3,
      title: "Rollerim ve Rollerimle İlişkim Psikodrama Atölyesi",
      organization: "Pınar Ulupınar Erakay ile birlikte - TPÖÇG Akademi, Yaşar Üniversitesi",
      year: "2024"
    },
    {
      id: 4,
      title: "Sınav Kaygısına Yönelik Psikodrama Atölye Çalışması",
      organization: "Ekin Koleji",
      year: "2024"
    },
    {
      id: 5,
      title: "Aşkın Liderliğin Üç Hali Farkındalık Çalışması",
      organization: "Çeşme Rotary Kulübü Ryla Hukuk",
      year: "2023"
    },
    {
      id: 6,
      title: "Mesleki Gölge Etkinliği",
      organization: "Mev Koleji",
      year: "2022"
    },
    {
      id: 7,
      title: "Online Mezun Sohbetleri - Psikoloji Bölümü Mezunları Etkinliği",
      organization: "Ege Üniversitesi",
      year: "2020"
    },
    {
      id: 8,
      title: "Yeni Dünyada Ben - 26. Ütopyalar Toplantısı",
      organization: "",
      year: "2020"
    },
    {
      id: 9,
      title: "Psikodrama Atölye Çalışması - 25. Ütopyalar Toplantısı",
      organization: "Karaburun",
      year: "2019"
    }
  ],
  mediaInterviews: [
    {
      id: 1,
      title: "Gülemeyen Bir Halkın Portresi: Kendi Duyguna Yabancılaşmak",
      url: "https://ilkses.com.tr/yasam/gulemeyen-bir-halkin-portresi-kendi-duyguna-yabancilasmak-397174",
      source: "İlkses Gazetesi",
      date: "07.04.2025"
    }
  ],
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "workshops", label: "Workshops" },
    { id: "experience", label: "Experience" }
  ],
  blogPosts: [
  {
    id: 1,
    title: "Psikodrama Nedir?",
    date: "15.03.2025",
    excerpt: "Psikodrama, bireyin yaşadığı deneyimleri sahneye taşıyarak farkındalık kazanmasını sağlayan güçlü bir terapi yöntemidir.",
    content: [
      { type: "p", text: "Psikodrama, J.L. Moreno tarafından geliştirilen..." },
      { type: "h2", text: "Psikodrama Nasıl Çalışır?" },
      { type: "p", text: "Grup ortamında gerçekleştirilen psikodrama seanslarında..." }
    ]
  },
  {
  id: 2,
  title: "Psikodrama Nedir?",
  date: "15.03.2025",
  excerpt: "Psikodrama, bireyin yaşadığı deneyimleri sahneye taşıyarak farkındalık kazanmasını sağlayan güçlü bir terapi yöntemidir.",
  content: [
    {
      type: "p",
      text: "Psikodrama, Avusturyalı psikiyatrist Jacob Levy Moreno tarafından geliştirilen bir grup terapi yöntemidir. Bu yaklaşımda bireyler, yaşamlarında yaşadıkları olayları veya içsel çatışmaları sahne üzerinde canlandırarak ifade ederler. Psikodrama, kişinin yalnızca konuşarak değil; hareket, rol alma ve etkileşim yoluyla duygularını keşfetmesini sağlar."
    },
    {
      type: "p",
      text: "Geleneksel konuşma terapilerinden farklı olarak psikodrama, deneyimsel bir yöntemdir. Danışanlar yaşadıkları olayları yeniden sahneleyerek farklı bakış açıları geliştirebilir, bastırılmış duygularını fark edebilir ve yeni çözüm yolları deneyimleyebilir."
    },
    {
      type: "h2",
      text: "Psikodrama Nasıl Çalışır?"
    },
    {
      type: "p",
      text: "Psikodrama genellikle bir grup ortamında uygulanır ve bir terapist (yönetici) tarafından yönlendirilir. Seans sırasında bir kişi 'protagonist' yani ana karakter olarak seçilir ve üzerinde çalışmak istediği bir konu veya yaşam deneyimi sahnede canlandırılır."
    },
    {
      type: "p",
      text: "Grubun diğer üyeleri ise protagonistin hayatındaki kişileri, duyguları veya sembolik rolleri canlandırabilir. Bu süreç sayesinde kişi kendi deneyimini dışarıdan görme fırsatı bulur ve olaylara farklı perspektiflerden yaklaşabilir."
    },
    {
      type: "h2",
      text: "Psikodramada Kullanılan Temel Teknikler"
    },
    {
      type: "p",
      text: "Psikodrama sürecinde çeşitli teknikler kullanılır. Bunlardan biri 'rol değiştirme' tekniğidir. Bu teknikte kişi, yaşadığı çatışmada karşı tarafın rolüne geçerek onun bakış açısını deneyimler. Bir diğer teknik olan 'ayna tekniği' ise kişinin kendi davranışlarını başka birinin canlandırması sayesinde dışarıdan gözlemlemesini sağlar."
    },
    {
      type: "p",
      text: "Ayrıca 'boş sandalye' tekniği ile birey, hayatında önemli bir kişiyle konuşuyormuş gibi duygularını ifade edebilir. Bu yöntemler kişinin içsel farkındalığını artırmayı ve duygusal çözülme sağlamayı amaçlar."
    },
    {
      type: "h2",
      text: "Psikodramanın Faydaları"
    },
    {
      type: "p",
      text: "Psikodrama; kişinin duygularını ifade etmesini kolaylaştırabilir, empati becerilerini geliştirebilir ve geçmiş deneyimlerin yeniden anlamlandırılmasına yardımcı olabilir. Grup ortamı sayesinde bireyler yalnız olmadıklarını hissedebilir ve farklı yaşam deneyimlerinden öğrenme fırsatı bulabilir."
    },
    {
      type: "p",
      text: "Bu yöntem özellikle kişilerarası ilişkiler, travmatik deneyimler, özgüven sorunları ve duygusal farkındalık konularında destekleyici bir terapi yaklaşımı olarak kullanılabilir."
    },
    {
      type: "h2",
      text: "Kimler Psikodramadan Fayda Görebilir?"
    },
    {
      type: "p",
      text: "Psikodrama, kendini daha iyi tanımak isteyen, duygularını ifade etmekte zorlanan veya geçmiş deneyimlerini anlamlandırmak isteyen bireyler için faydalı olabilir. Aynı zamanda grup çalışmaları aracılığıyla sosyal farkındalık ve empati becerilerini geliştirmek isteyen kişiler için de etkili bir yöntemdir."
    },
    {
      type: "p",
      text: "Her terapi yaklaşımında olduğu gibi psikodrama da bireyin ihtiyaçlarına göre bir uzman tarafından değerlendirilerek uygulanmalıdır."
    }
  ]
}
]
};
