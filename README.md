```
# HealthConnect 🩺

**Live Website**: [http://healthconnect.ayushg.site](http://healthconnect.ayushg.site)

HealthConnect is a static, health-themed web application that provides simple tools like BMI and Water Intake calculators. The website is responsive, user-friendly, and fully deployed using AWS services.

---

## 🧠 Features

- ✅ **BMI Calculator** – Calculates Body Mass Index based on weight and height.
- ✅ **Water Intake Calculator** – Estimates daily water requirements.
- ✅ **Clean UI** – User-friendly, minimal, and mobile-responsive design using Bootstrap.
- ✅ **Informational Content** – Sections related to health awareness.
- ✅ **Fully Cloud Hosted** – Hosted on AWS S3 with a custom domain using Route 53.

---

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5
- **Cloud Hosting**: AWS S3 (Static Website Hosting)
- **DNS Management**: AWS Route 53
- **Region**: `ap-south-1` (Mumbai) & `us-east-1` (for subdomain hosting)

---

## 📁 Folder Structure

```

.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── \[all assets]
└── README.md

````

---

## 🚀 How to Build This Project (Step-by-Step)

### 1. Frontend Development

- Create `index.html` with sections for:
  - BMI Calculator
  - Water Intake Calculator
  - Navigation and footer
- Add Bootstrap via CDN in the `<head>` section
- Use JavaScript for calculator logic (inside `js/script.js`)
- Style using `css/style.css`

### 2. Prepare for Deployment

- Make sure all file paths (CSS/JS/images) are **relative**, like:
  ```html
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js"></script>
````

### 3. Host on AWS S3

* Create a bucket named: `healthconnect.ayushg.site`
* Enable **static website hosting** in bucket properties
* Upload all your project files (`index.html`, folders)
* Make the files public using bucket policy

### 4. Configure Domain with Route 53

* Create a **Hosted Zone** for `ayushg.site`
* Add a **CNAME or A Record**:

  * For `healthconnect.ayushg.site` → S3 website endpoint
  * For `www.healthconnect.ayushg.site` → create another S3 bucket and upload same files

### 5. (Optional) Enable HTTPS

* Use **AWS CloudFront** and **ACM** to attach SSL and distribute the site securely

---

## 💡 Future Enhancements

* ✅ Add more health tools (e.g., calorie tracker, step counter)
* ✅ Integrate Firebase for contact form or feedback
* ✅ Use animations for better UX
* ✅ Add backend for storing user data securely

---

## 🧑‍💻 Created By

**Ayush Gupta**

If you'd like to connect or collaborate, feel free to reach out!
