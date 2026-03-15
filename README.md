# Merve Ulcay — Kişisel Web Sitesi / Personal Website

Tüm içerik `data.js` dosyasından yönetilir. HTML veya JavaScript'e dokunmanıza gerek yoktur.  
All content is managed from `data.js`. No need to touch HTML or JavaScript.

---

## 🇹🇷 Türkçe

### Kişisel Bilgiler — `personalInfo`

```js
personalInfo: {
  name: "Merve Ulcay",           // Sayfa başlığında ve header'da görünür
  title: "Psikolog",             // İsmin altındaki unvan
  profileImage: "images/profile.jpeg", // Profil fotoğrafının yolu
  description: `...`,            // Hero alanındaki kısa tanıtım metni (paragraflar arasına boş satır bırakın)
  bio: `...`,                    // "Hakkımda" bölümündeki uzun metin
  contact: {
    email: "...",
    phone: "...",
    website: "..."
  }
}
```

---

### Eğitim — `education`

```js
{ degree: "Psikolojik Danışman", school: "Ege Üniversitesi", year: "2015" }
```
Yeni eklemek için listeye yeni bir `{}` bloğu kopyalayın, `id` değerini artırın.

---

### Sertifikalar — `certifications`

```js
{ title: "Sertifika Adı", issuer: "Veren Kurum", year: "2022" }
```

---

### Atölyeler — `workshops`

```js
{ title: "Atölye Adı", organizer: "Eğitici: ...", year: "2025" }
```
Devam eden eğitimler için `year: "2025 - Halen"` kullanabilirsiniz.

---

### Deneyim ve Etkinlikler — `experience`

```js
{ title: "Etkinlik Adı", organization: "Kurum", year: "2024" }
```
`organization` boş bırakılabilir: `organization: ""`

---

### Medya Röportajları — `mediaInterviews`

```js
{ title: "Makale Başlığı", url: "https://...", source: "Yayın Adı", date: "07.04.2025" }
```

---

### Blog Yazıları — `blogPosts`

```js
{
  id: 3,                          // Her yazı için benzersiz bir sayı
  title: "Yazı Başlığı",
  date: "15.03.2025",
  excerpt: "Kısa özet...",        // Kartlarda görünen özet
  content: [
    { type: "p", text: "Paragraf metni..." },
    { type: "h2", text: "Alt Başlık" },
    { type: "p", text: "Devam eden paragraf..." }
  ]
}
```
Yeni yazı eklemek için `blogPosts` dizisine yeni bir blok ekleyin ve `id`'yi artırın.  
Yazı sayfası otomatik olarak `blog-post.html?id=3` adresinde açılır.

---

## 🇬🇧 English

### Personal Info — `personalInfo`

```js
personalInfo: {
  name: "Merve Ulcay",           // Shown in header and hero
  title: "Psikolog",             // Subtitle below name
  profileImage: "images/profile.jpeg", // Path to profile photo
  description: `...`,            // Short intro text in hero (leave blank lines between paragraphs)
  bio: `...`,                    // Long text in the "Hakkımda" section
  contact: {
    email: "...",
    phone: "...",
    website: "..."
  }
}
```

---

### Education — `education`

```js
{ degree: "Degree Name", school: "University", year: "2015" }
```
To add a new entry, copy a `{}` block into the list and increment the `id`.

---

### Certifications — `certifications`

```js
{ title: "Certificate Name", issuer: "Issuing Body", year: "2022" }
```

---

### Workshops — `workshops`

```js
{ title: "Workshop Name", organizer: "Instructor: ...", year: "2025" }
```
For ongoing training use `year: "2025 - Halen"`.

---

### Experience & Events — `experience`

```js
{ title: "Event Title", organization: "Institution", year: "2024" }
```
`organization` can be left empty: `organization: ""`

---

### Media Interviews — `mediaInterviews`

```js
{ title: "Article Title", url: "https://...", source: "Publication", date: "07.04.2025" }
```

---

### Blog Posts — `blogPosts`

```js
{
  id: 3,                          // Unique number for each post
  title: "Post Title",
  date: "15.03.2025",
  excerpt: "Short summary...",    // Shown on the blog card
  content: [
    { type: "p", text: "Paragraph text..." },
    { type: "h2", text: "Subheading" },
    { type: "p", text: "More paragraph text..." }
  ]
}
```
To add a new post, add a new block to the `blogPosts` array and increment the `id`.  
The post page is automatically available at `blog-post.html?id=3`.

---

## Dosya Yapısı / File Structure

```
/
├── index.html        # Ana sayfa / Main page
├── blog-post.html    # Blog yazısı şablonu / Blog post template
├── data.js           # ✏️ Tüm içerik buradan yönetilir / All content managed here
├── script.js         # Sayfa mantığı / Page logic (dokunmayın / don't touch)
├── styles.css        # Tasarım / Design (dokunmayın / don't touch)
└── images/
    └── profile.jpeg  # Profil fotoğrafı / Profile photo
```
