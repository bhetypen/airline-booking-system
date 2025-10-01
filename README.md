# Technical Specification Document (TSD)

**Project Name:** Airline Booking System  
**Version:** 1.0  
**Date:** [Insert Submission Date]  
**Authors:** [Insert Team Members' Names]

------------------------------------------------------------------------

## Table of Contents

1. [Title Section](#technical-specification-document-tsd)
2. [Introduction](#1-introduction)
3. [Project Scope](#2-project-scope)
4. [Features](#3-features)
    - [Functional Requirements](#31-functional-requirements)
    - [Non-Functional Requirements](#32-non-functional-requirements)
5. [System Architecture](#4-system-architecture)
6. [Frontend Requirements](#5-frontend-requirements)
7. [Backend Requirements](#6-backend-requirements)
8. [Database Design (ERD)](#7-database-design-erd)
9. [UI/UX Design (Figma Mockups + Typography)](#8-uiux-design-figma-mockups)
10. [Project Management (Trello)](#9-project-management-trello)
11. [Development Roadmap](#10-development-roadmap)
12. [Deliverables](#11-deliverables)
13. [References / Links](#12-references--links)


------------------------------------------------------------------------

## 1. Introduction

The Airline Booking System is a web-based platform that enables users to
search, book, and manage flight reservations. The system also includes
an admin interface for managing flights, users, and reports.

The purpose of this document is to define the technical specifications
of the system including **frontend and backend requirements, database
design, user interface design, and project management plan**.

------------------------------------------------------------------------

## 2. Project Scope

-   **Phase 1 (2 Weeks):**
    -   Technical Specification Document
    -   ERD (Entity Relationship Diagram)
    -   Figma Mockups (including typography and color scheme)
    -   Trello Board (task management)
    -   Proposal Presentation
-   **Phase 2 (Development & Deployment):**
    -   Frontend development (Vue.js)
    -   Backend development (Node.js/Express)
    -   Database implementation (MongoDB)
    -   Testing, debugging, deployment

------------------------------------------------------------------------

## 3. Features

### 3.1 Functional Requirements

**Customer Features:**
- Search flights (origin, destination, date, passengers).
- View flight details (airline, schedule, price, availability).
- **Book flights with passenger details and seat selection.**
- **Modify or update bookings (change seat, edit passenger info, update
  itinerary).**
- Make payment (mock/real).
- View and manage bookings (cancel, view history).
- Register, log in, and update profile.
- **Login/Logout functionality.**
- **User Profile management.**
- **Search features with filters (price, duration, airline, etc.).**
- **Itinerary details (view booked flights, upcoming trips).**
- **About Page with system information.**

**Admin Features:**
- Manage flights (add, edit, delete).
- Manage users.
- View booking reports (optional).

### 3.2 Non-Functional Requirements

-   **Usability:** Responsive, intuitive UI.
-   **Performance:** Handle 100+ concurrent users.
-   **Security:** Password hashing, JWT/session-based authentication,
    role-based access.
-   **Scalability:** Support future growth in data and users.
-   **Availability:** 99% uptime on cloud hosting.

------------------------------------------------------------------------

## 4. System Architecture

-   **Frontend:** Vue.js, HTML, CSS, TailwindCSS/Bootstrap.
-   **Backend:** Node.js with Express.
-   **Database:** MongoDB.
-   **Deployment:** Docker/Caddy /hostinger
-   **Version Control:** GitHub.

**High-Level Flow:**

    [User Browser] <-> [Frontend: Vue.js] <-> [Backend: Node.js API] <-> [Database: MongoDB]

------------------------------------------------------------------------

## 5. Frontend Requirements

The frontend provides the user interface (UI) and interactions, based on
Figma mockups.

-   **Landing Page:** Search form (origin, destination, date, passenger
    count).
-   **Search Results Page:** List of flights with filters.
-   **Booking Page:** Passenger details, seat selection, booking
    modification options.
-   **Payment Page:** Mock/real payment form.
-   **Booking Confirmation Page:** Summary with booking reference.
-   **Admin Dashboard:** Manage flights, users, and reports.
-   **Login/Logout Pages:** Authentication forms.
-   **User Profile Page:** View and edit personal information.
-   **Itinerary Page:** Display booking history and upcoming trips.
-   **About Page:** Static information page about the system.

**Technology:** Vue.js, TailwindCSS/Bootstrap, Axios for API calls.

------------------------------------------------------------------------

## 6. Backend Requirements

The backend powers the application logic and APIs.

-   **Authentication Service:** Register/login, logout, password
    encryption.
-   **Flight Management API:** CRUD operations for flights.
-   **Search Service:** Query flights with filters.
-   **Booking Service:** Create and manage bookings, update seat
    availability, allow booking modifications.
-   **Payment Service (Mock):** Simulated payment gateway.
-   **Admin Service:** Manage users and flights.
-   **User Profile API:** Retrieve and update profile details.
-   **Itinerary API:** Fetch user's booked flights and upcoming trips.
-   **Static Content API:** Serve About Page content.

**Technology:** Node.js with Express, REST APIs, JWT for authentication.

------------------------------------------------------------------------

## 7. Database Design (ERD)

**Entities:**
- **User**: UserID, Name, Email, Password, Role
- **Flight**: FlightID, Airline, Origin, Destination, DateTime, Price,
  SeatsAvailable
- **Booking**: BookingID, UserID, FlightID, SeatNumber, Status,
  BookingDate
- **Payment**: PaymentID, BookingID, Amount, Method, Status

**ERD Diagram Link:** \[Insert Link\]

------------------------------------------------------------------------

## 8. UI/UX Design (Figma Mockups)

**Key Screens:**
1. Landing Page
2. Search Results Page
3. Booking Page (with seat selection & editing features)\
4. Payment Page
5. Booking Confirmation Page
6. Admin Dashboard
7. Login/Logout Pages
8. User Profile Page
9. Itinerary Page
10. About Page

**Typography & Colors:**
- Font Family: [Insert Font\]
- Font Sizes: Heading, Subheading, Body
- Colors: Primary (#...), Secondary (#...), Accent (#...)

**Figma Mockup Link:** \[Insert Link\]

------------------------------------------------------------------------

## 9. Project Management (Trello)

The project follows Agile methodology, with Trello used for task
management.

**Workflow:**
- Columns: To Do → In Progress → Review → Done
- Tasks assigned per team member

**Trello Board Link:** [Insert Link]

------------------------------------------------------------------------

## 10. Development Roadmap

-   **Phase 1 (2 Weeks):** TSD, ERD, Figma, Trello, Proposal.
-   **Phase 2:**
    -   Week 1--2: Frontend development
    -   Week 3--4: Backend & Database integration
    -   Week 5: Integration and testing
    -   Week 6: Final deployment

------------------------------------------------------------------------

## 11. Deliverables

-   Technical Specification Document (TSD)
-   ERD Diagram
-   Figma Mockups (with typography)
-   Trello Project Board
-   Proposal Presentation
-   Final Source Code (Phase 2)

------------------------------------------------------------------------

## 12. References / Links

-   **Trello Project:** [Insert Link]
-   **Figma Mockup:** [Insert Link]
-   **ERD Diagram:** [Insert Link]


