# Bastiseva Website - HTML Structure Plan

This document outlines the HTML structure for the single-page service aggregator website.

## 1. Document Head (`<head>`)
-   Meta tags for charset and viewport.
-   Title: "Bastiseva - Your Service Partner"
-   Link to TailwindCSS CDN.
-   Inline `<style>` tag for custom styles (e.g., olive green/red colors).

## 2. Body (`<body>`)
-   Main container with a white background.

### 2.1. Header (`<header>`)
-   Sticky header (`position: sticky; top: 0;`).
-   Navigation bar (`<nav>`) with:
    -   Logo/Website Name: "Bastiseva".
    -   Navigation links (`<ul>`): Home, Services, Book Now, Join Us, Contact.
    -   Mobile menu button (hamburger icon).

### 2.2. Hero Section (`<section id="home">`)
-   Main heading (`<h1>`): "Your One-Stop Solution for Home Services".
-   Tagline (`<p>`): "Reliable, professional, and right at your doorstep.".
-   Primary Call-to-Action button (`<button>`): "Book a Service".

### 2.3. Popular Services Section (`<section id="services">`)
-   Section title (`<h2>`): "Our Popular Services".
-   Grid container for service cards (responsive grid).
-   Service cards (`<div>`) for each service:
    -   Maid, Cook, Driver, Plumber, Electrician, Tutor, Pest Control, Document Help.
    -   Each card will contain:
        -   Icon (SVG or Font Awesome).
        -   Service title (`<h3>`).
        -   "Book Now" button (`<button>`).

### 2.4. Detailed Booking Section (`<section id="book-now">`)
-   Section title (`<h2>`): "Book Your Service".
-   Booking form (`<form>`) with the following fields:
    -   Name (`<input type="text">`).
    -   Phone (`<input type="tel">`).
    -   Address (`<textarea>`).
    -   Service Type (`<select>`).
    -   Date/Time (`<input type="datetime-local">`).
    -   Submit button (`<button type="submit">`): "Book via WhatsApp".

### 2.5. Join as Professional Section (`<section id="join-us">`)
-   Section title (`<h2>`): "Join Our Team".
-   Partner signup form (`<form>`) with fields:
    -   Name (`<input type="text">`).
    -   Service Type (`<select>`).
    -   Phone (`<input type="tel">`).
    -   ID Proof (`<input type="file">`).
    -   Submit button (`<button type="submit">`): "Register via WhatsApp".

### 2.6. Footer (`<footer>`)
-   Grid layout with multiple columns.
-   About Us section with a brief description.
-   Contact Information (Address, Phone, Email).
-   Quick Links: Privacy Policy, Terms of Service.
-   Social Media links (icons for Facebook, Twitter, Instagram).

## 3. Booking Modal (`<div>`)
-   Hidden by default, shown on "Book Now" click.
-   Modal container with an overlay background.
-   Modal content with a close button (`<button>`).
-   A simplified version of the booking form from section 2.4.

## 4. JavaScript (`<script>`)
-   Placed at the end of the `<body>`.
-   Logic for:
    -   Toggling the mobile menu.
    -   Opening and closing the booking modal.
    -   Handling form submissions to generate and open WhatsApp API links.

## 5. Styling Plan (TailwindCSS)

-   **Colors**:
    -   Primary Background: `bg-white`
    -   Primary Text: `text-gray-800`
    -   Theme Color 1 (Olive Green): Define a custom color `olive` (e.g., `#556B2F`). Use `bg-olive-500`, `text-olive-500`.
    -   Theme Color 2 (Red): Define a custom color `brand-red` (e.g., `#DC2626`). Use for buttons and highlights `bg-red-600`, `hover:bg-red-700`.
-   **Typography**:
    -   Use sans-serif fonts provided by Tailwind's default configuration (`font-sans`).
    -   Headings (`h1`, `h2`): `font-bold`, with responsive text sizes (e.g., `text-3xl md:text-5xl`).
    -   Body text: `text-base`, `text-gray-600`.
-   **Layout**:
    -   Use Flexbox and Grid for layout (`flex`, `grid`, `grid-cols-*`).
    -   Center content with `mx-auto` and add padding with `px-*` and `py-*`.
    -   Ensure mobile-first responsiveness using Tailwind's breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
-   **Components**:
    -   **Header**: `sticky`, `top-0`, `z-50`, `bg-white`, `shadow-md`.
    -   **Buttons**: `py-2`, `px-4`, `rounded-lg`, `text-white`, `font-semibold`, `transition-colors`.
    -   **Service Cards**: `bg-gray-50`, `rounded-xl`, `shadow-lg`, `p-6`, `text-center`, `hover:shadow-2xl`, `transition-shadow`.
    -   **Forms**: `w-full`, `p-2`, `border`, `border-gray-300`, `rounded-md`, `focus:ring-2`, `focus:ring-olive-500`.
    -   **Modal**: `fixed`, `inset-0`, `bg-black/50`, `flex`, `items-center`, `justify-center`. Modal content: `bg-white`, `p-8`, `rounded-lg`, `shadow-xl`.

## 6. JavaScript Logic Plan

-   **Constants**:
    -   Define constants for the WhatsApp phone number.
-   **DOM Element Selection**:
    -   Select all necessary elements: modal, open/close buttons, forms, mobile menu button, nav links.
-   **Event Listeners**:
    -   **Booking Buttons**: Add click listeners to all "Book Now" buttons to open the booking modal.
    -   **Modal Close Button**: Add a click listener to close the modal.
    -   **Form Submissions**: Add `submit` event listeners to the booking form, partner form, and modal form.
        -   Prevent the default form submission.
        -   Get all form field values.
        -   Format the data into a string for the WhatsApp message.
        -   URL-encode the message text.
        -   Construct the final `wa.me` link.
        -   Open the link in a new tab: `window.open(url, '_blank')`.
    -   **Mobile Menu**: Add a click listener to the hamburger icon to toggle a `hidden` class on the mobile navigation menu.