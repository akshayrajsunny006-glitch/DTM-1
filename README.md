🚀 CodeBuddy – Skill-Based Project Partner Finder

CodeBuddy is a human-centric, skill-matching web platform designed for college students to find the right project partners based on complementary skills.
Instead of random team formation, CodeBuddy focuses on what you know and what you want to learn.

This project is built as part of a Design Thinking (DTM) initiative.

🧠 Problem Statement

Many students have innovative project ideas but struggle to find teammates with the right skills, availability, or interest alignment.
This leads to:

Solo development stress

Poor collaboration

Unfinished or low-quality projects

💡 Solution – CodeBuddy

CodeBuddy solves this by:

Creating Skill-Gap Profiles

Showing Project Beacons that need complementary skills

Matching students based on skills & interests

Providing a trusted campus-only environment

✨ Key Features
🔐 Authentication

Firebase Authentication (Email & Password)

Secure login & registration

Session persistence using Local Storage

👤 User Profile

First Name, Last Name

Gender

Department & Year

Working Hours

Skills Known (canTeach)

Skills to Learn (wantToLearn)

📡 Project Beacons

Students can post projects

Shows skills required

Others can apply to join

🤝 Skill Matching

Backend logic matches:

User skills ↔ Project requirements

Returns matched projects with overlapping skills

🛡 Security

Firebase Firestore Security Rules

Users can only edit their own profile

Only authenticated users can access data

🛠 Tech Stack
Frontend

HTML5

Tailwind CSS

JavaScript (Vanilla)

Font Awesome

Backend

Python

Flask

Firebase Admin SDK

Database & Auth

Firebase Authentication

Firebase Firestore

📂 Project Structure
codebuddy/
│
├── frontend/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── js/
│       └── firebase.js
│
├── backend/
│   ├── app.py
│   ├── serviceAccountKey.json
│   └── requirements.txt
│
└── README.md

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Save user profile
POST	/api/auth/login	Login (optional backend check)
GET	/api/users/<id>	Fetch user profile
POST	/api/projects	Create a project
GET	/api/projects	Fetch all projects
POST	/api/projects/<id>/apply	Apply to project
GET	/api/match/<userId>	Skill-based project matching
⚙ Setup Instructions
1️⃣ Firebase Setup

Create Firebase Project

Enable:

Authentication → Email/Password

Firestore Database

Download serviceAccountKey.json

Place it inside /backend/

2️⃣ Backend Setup
cd backend
pip install -r requirements.txt
python app.py


Backend runs at:

http://localhost:5000

3️⃣ Frontend Setup

Just open:

frontend/login.html


OR use Live Server (recommended).

🔐 Firestore Security Rules
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /users/{userId} {
      allow read, write: if request.auth != null &&
                          request.auth.uid == userId;
    }

    match /projects/{projectId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;

      match /applications/{appId} {
        allow create, read: if request.auth != null;
      }
    }
  }
}

🎯 Design Thinking Alignment
DTM Phase	Implementation
Empathize	Student collaboration pain
Define	Skill mismatch problem
Ideate	Skill-gap based matching
Prototype	Web app MVP
Test	Campus-ready demo
🚀 Future Enhancements

In-app chat

AI-based partner recommendation

Team auto-formation

Admin dashboard

Firebase Hosting deployment

📌 Academic Use Disclaimer

This project is developed only for educational and demonstration purposes.

👨‍💻 Developed By

CodeBuddy Team
SRM Ramapuram
DTM Project – 2025
