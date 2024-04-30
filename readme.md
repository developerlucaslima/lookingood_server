# TODO: Use Cases and Tests

## Users
- 🧪 *User Register*
    - [X] - It should allow to register a user.
    - [X] - It should hash user password upon registration.
    - [X] - It should prevent a user register with a duplicate email.
    - [X] - It should prevent a user register with an invalid service gender.
    - [X] - It should prevent a user register with service gender as blank.
    - [X] - It should validate serviceGender as "MALE".
    - [X] - It should validate serviceGender as "FEMALE".
    - [X] - It should validate serviceGender as "BOTH".
- 🧪 *User Authenticate*
    - [X] - It should allow user authenticate.
    - [X] - It should prevent user authenticate with wrong email.
    - [X] - It should prevent user authenticate with wrong password.
- 🧪 *Get User Profile*
    - [X] - It should allow get user profile.
    - [X] - It should prevent get user profile if user does not exist.

## Establishments
- 🧪 *Establishment Register*
    - [X] - It should allow to register a establishment.
    - [X] - It should hash user password upon registration.
    - [X] - It should prevent a establishment register with a duplicate email.
- 🧪 *Establishment Authenticate*
    - [X] - It should allow establishment authenticate.
    - [X] - It should prevent establishment authenticate with wrong email.
    - [X] - It should prevent establishment authenticate with wrong password.
- 🧪 *Get Establishment Profile*
    - [X] - It should allow get establishment profile.
    - [X] - It should prevent get establishment profile if establishment does not exist.
- 🧪 *Add Establishment Schedule*
    - [X] - It should allow add establishment schedule.
    - [X] - It should prevent to add establishment schedule if the establishment does not exist.
    - [X] - It should prevent add establishment schedule with break if it have not break start or end time.
    - [X] - It should prevent add establishment schedule with negative time parameters.
- 🧪 *Add Professional*
    - [X] - It should allow add professional.
    - [X] - It should prevent add professional if the establishment does not exist.
- 🧪 *Add Professional Schedule*
    - [X] - It should allow add professional schedule.
    - [X] - It should prevent add professional schedule if the professional does not exist.
    - [X] - It should prevent add professional schedule if the establishment does not exist.
    - [X] - It should prevent add professional schedule with break if it have not break start or end time.
    - [X] - It should prevent add professional schedule with negative time parameters.
    - [X] - It should prevent add professional schedule if the establishment does not have opening hours for the given weekday.
    - [X] - It should prevent add professional schedule if the professional's schedule conflicts with the establishment's schedule.
- 🧪 *Add Service*
    - [X] - It should allow add service.
    - [X] - It should prevent add service if the establishment does not exist.
    - [X] - It should prevent adding a service if the duration is not a multiple of 15 minutes.
    - [X] - It should prevent add service if gender is not valid.

## Service Reservations
- 🧪 *Service Reservation*
    - [X] - It should allow service reservation.
    - [X] - It should prevent service reservation if professional does not exist.
    - [X] - It should prevent service reservation if service does not exist.
    - [X] - It should prevent service reservation if user does not exist.
    - [X] - It should prevent service reservation if establishment does not exist.
    - [X] - It should prevent service reservation if the establishment, professional and service does not match.
    - [X] - It should prevent service reservation if there are conflicts in the professional's schedule.
    - [X] - It should prevent service reservation if the professional does not have operating hours for the given time.
- 🧪 *Service Reservation Update*
    - [X] - It should allow service reservation update.
    - [X] - It should prevent service reservation update if the reservation does not exist.
    - [X] - It should prevent service reservation update if the user does not exist.
    - [X] - It should prevent service reservation update if the user does not match the reservation.
    - [X] - It should prevent service reservation update if the service does not exist.
    - [X] - It should prevent service reservation update if it's not within the modification deadline.
    - [X] - It should prevent service reservation update if the professional does not exist.
    - [X] - It should prevent service reservation update if the establishment, professional and service does not match.
    - [X] - It should prevent service reservation update if there are conflicts in the professional's schedule.
    - [X] - It should prevent service reservation update if the professional hasn't operating hours for the given time.
- 🧪 *Service Reservation Confirmation*
    - [X] - It should allow service reservation confirmation.
    - [X] - It should prevent service reservation confirmation if the reservation does not exist.
    - [X] - It should prevent service confirmation update if the establishment does not exist.
    - [X] - It should prevent service reservation confirmation if the establishment does not match the reservation.

## Additional Ideas
- 🔜 It should display available time slots based on establishment and professional schedules.
- 🔜 It should prevent service reservation if user already has reservation at the same time
- 🔜 Users must be able to cancel a booked service or confirmed service.
- 🔜 Users must be able to view a list of services with information about whether it is Confirmed, Checked-out, or Waiting for confirmation.
- 🔜 Users must receive booking confirmation via email or app notification.
- 🔜 Users can rate and leave comments about establishments and professionals after the service. (Moved from functionality list)
- 🔜 Implement two-factor authentication for added security.
- 🔜 Allow users to share their reservations and experiences on social networks.
- 🔜 Establishments can offer promotional discounts or packages.
- 🔜 Establishments can set flexible cancellation policies.
- 🔜 The application must implement a notification system to remind users of their reservations and notify them of changes or cancellations.
- 🔜 Professionals must be notified of changes or cancellations of bookings as soon as possible.
- 🔜 Cancellation or rescheduling policies should be predefined and clearly communicated to users.
- 🔜 Charge a commission fee (e.g., 4%) on check out bookings to support the platform.
- 🔜 Allow establishments to offer services at the user's location (at-home) or both in-salon and at-home options.
- 🔜 Implement a loyalty program to reward repeat customers (e.g. “book 10 times and get one for free”).
- 🔜 Allow users to search for establishments based on location.
- 🔜 Integrate with payment gateways for secure transactions.
- 🔜 Allow users to filter the list of establishments by location (in-salon or at-home) and other relevant criteria.
- 🔜 Offer multiple languages for a broader user base.
- 🔜 Use recommendation algorithms to suggest establishments based on user preferences and booking history.
- 🔜 It should not allow registration with an invalid email format (e.g., missing @ symbol, invalid domain name).
- 🔜 It should not allow registration with a weak password (e.g., too short, no combination of uppercase/lowercase letters, numbers, and symbols).
- 🔜 It should send a verification email upon registration.
- 🔜 It should allow user to choose serviceGender from a dropdown or selection list instead of directly entering text.
- 🔜 It should lock the account after a certain number of failed login attempts.
- 🔜 It should offer "forgot password" functionality with email verification for password reset.
- 🔜 It should not allow service date change after a specific time-frame (e.g., 24 hours before appointment).
- 🔜 It should notify both user and establishment about service cancellation or date change.
- 🔜 It should allow filtering and sorting of services based on various criteria (e.g., date, status, establishment, professional).
- 🔜 It should display clear and concise information for each service, including service details, confirmation status, and payment status.
- 🔜 It should require verification of establishment details (e.g., business license, contact information) before registration approval.
- 🔜 It should allow adding multiple professionals with different service specializations.
- 🔜 It should allow setting individual professional schedules and availability.
- 🔜 It should provide options for managing service pricing and discounts.
- 🔜 It should allow establishments to view user booking history and preferences.
- 🔜 It should allow communication with users through the platform for appointment confirmations, rescheduling, or other relevant information.

- ⚡ The application should respond quickly to user requests, even under peak conditions.
- ⚡ The application must protect user and establishment data from unauthorized access.
- ⚡ The application interface should be intuitive and easy to use for all types of users.
- ⚡ The application should be available for use most of the time.
- ⚡ The application should be able to accommodate an increasing number of users and bookings.
- ⚡ The application be tested on different devices and operating systems for compatibility and responsiveness.
- ⚡ The application follow accessibility guidelines to ensure usability for users with disabilities.
- ⚡ The application implement data encryption for user information and secure communication protocols.