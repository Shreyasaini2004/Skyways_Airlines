# ✈️ SkyWays Airlines – Online Flight Booking System

## 📖 Overview

SkyWays Airlines is a full-stack flight booking platform built using Spring Boot, Angular, and PostgreSQL. The application enables users to search flights in real time, book tickets, process secure payments, manage reservations, and receive automated email notifications.

The project focuses on improving transaction reliability through centralized exception handling, secure authentication, event-driven messaging, and third-party API integrations.

---

## 🚀 Features

- User Registration & Login with JWT Authentication
- Real-Time Flight Search using Skyscanner API
- Airport Autocomplete Search
- Flight Booking & Reservation Management
- Seat-Type-Based Booking Validation
- Stripe Payment Integration
- Automated Refund Processing
- Kafka Event-Driven Messaging
- SendGrid Email Notifications
- Global Exception Handling
- Dockerized Deployment

---

## 🛠️ Tech Stack

### Frontend
- Angular 21
- TypeScript
- Bootstrap 5

### Backend
- Java 17
- Spring Boot 3.2
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate

### Database
- PostgreSQL

### Messaging
- Apache Kafka

### External APIs
- Skyscanner API
- Stripe API
- SendGrid API

### DevOps & Tools
- Docker
- Docker Compose
- Git & GitHub
- Maven
- Postman

---

## 🏗️ System Architecture

```text
Angular Frontend
        │
        ▼
 Spring Boot Backend
        │
 ┌──────┼───────────────┐
 ▼      ▼               ▼
PostgreSQL     Kafka     External APIs
                    ├── Skyscanner
                    ├── Stripe
                    └── SendGrid
```

---

## 🔑 Core Modules

### Authentication
- User Registration
- Login & JWT Generation
- Secure Access Control

### Flight Search
- Airport Autocomplete
- Real-Time Flight Search
- Fare Comparison

### Booking Management
- Flight Booking
- Seat Selection
- Capacity Validation
- Booking Cancellation

### Payment Processing
- Stripe Payment Intents
- Payment Confirmation
- Refund Management

### Notifications
- Booking Confirmation Emails
- Cancellation Emails
- Notification Tracking

---

## ⚡ Exception Handling & Reliability

To improve system stability and prevent booking failures, the platform implements:

- Global Exception Handler (`@RestControllerAdvice`)
- Custom Business Exceptions
- Structured API Error Responses
- Validation-Based Error Handling
- Logging with SLF4J & Logback
- Exception Handling for External API Integrations

### Problems Solved
- Passenger Data Loss
- Invalid Booking Requests
- Payment Failures
- Overbooking Scenarios
- Unhandled Runtime Exceptions

---

## 🔄 Event-Driven Architecture

Apache Kafka is used for asynchronous communication.

### Topics
- `booking-created`
- `payment-processed`

### Benefits
- Improved Scalability
- Fault Tolerance
- Decoupled Services
- Reliable Notification Delivery

---

## 🔒 Security Features

- JWT-Based Authentication
- Spring Security
- 3-DES Password Encryption
- Stateless Session Management
- Secure API Communication

---

## 📊 Project Highlights

- Delivered **5+ Core Business Modules**
- Integrated **3 External APIs**
- Implemented Centralized Exception Handling
- Supported **180 Passenger Capacity Validation per Flight**
- Automated Payment & Notification Workflows
- Dockerized Full-Stack Deployment

---

## 📂 API Modules

| Module | Purpose |
|----------|----------|
| Auth API | Registration & Login |
| Flight Search API | Real-Time Flight Search |
| Booking API | Reservation Management |
| Payment API | Stripe Payment Processing |
| Notification API | Email Notifications |

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone <repository-url>
cd skyways-airlines
```

### Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Frontend Setup

```bash
cd frontend
npm install
ng serve
```

Frontend runs on:

```text
http://localhost:4200
```

### Docker Deployment

```bash
docker-compose up --build
```

---

## 📌 My Contribution

- Implemented centralized exception handling using `@RestControllerAdvice`
- Designed custom business exceptions and structured error responses
- Improved transaction reliability and prevented passenger data loss
- Integrated external APIs for flight search, payments, and notifications
- Contributed to booking validation and overbooking prevention logic

---

## 👥 Team

- Shreya Saini
- Ritika Shrikant Shinde

---

## 📜 License

This project was developed as part of the Mphasis Internship Program for educational and learning purposes.
