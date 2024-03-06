## Doctor App backend 




**User Authentication API:**

**Endpoint: /api/auth**

**Description**: Handles user authentication and registration, providing secure access to the system for both users and admin.
**Notification System API:**

**Endpoint: /api/notifications**

**Description:** Manages the notification system, facilitating the communication of booking approvals between users and doctors.
Doctor Approval API:

**Endpoint: /api/doctors/approval**

**Description:** Allows admin to approve or block pending doctor requests, ensuring a curated list of approved doctors for users to choose from.
**Doctor Information API:**

**Endpoint: /api/doctors/{doctorId}**

**Description:** Retrieves detailed information about a specific doctor, including their profile and appointment details.
User Booking API:

**Endpoint: /api/users/bookings**

**Description:** Manages user bookings, allowing users to schedule appointments and receive notifications while maintaining a history of past bookings.
**Doctor Booking API:**

**Endpoint: /api/doctors/{doctorId}/bookings**

**Description:** Provides a list of bookings for a specific doctor, enabling the doctor to approve or reject booking requests.
Doctor Profile API:

**Endpoint: /api/doctors/{doctorId}/profile**

**Description:** Allows doctors to retrieve and update their profile information, with changes requiring approval from the admin.
Admin User Management API:

**Endpoint: /api/admin/users**

**Description:** Enables the admin to view and manage the list of registered users, ensuring efficient user management.
Admin Doctor Management API:

**Endpoint: /api/admin/doctors**