function calculatePrice() {
            // Step 1: Find all checkboxes with the name "course" that are currently checked by the user
            let selectedCourses = document.querySelectorAll('input[name="course"]:checked');
            
            let subtotal = 0;
            let bookingCount = selectedCourses.length; // The total number of checked boxes represents the booking count

            // Step 2: Loop through each checked box, read its numerical price value, and add it to the subtotal
            selectedCourses.forEach(function(checkbox) {
                subtotal += parseFloat(checkbox.value) || 0;
            });

            // Step 3: Determine the discount percentage based on the exact number of selected bookings
            let discountPercent = 0;
            
            if (bookingCount === 1) {
                discountPercent = 0;  // No discount for exactly 1 booking
            }
            else if (bookingCount === 2) {
                discountPercent = 5;  // 5% discount if exactly 2 bookings are checked
            } else if (bookingCount === 3) {
                discountPercent = 10; // 10% discount if exactly 3 bookings are checked
            } else if (bookingCount > 3) {
                discountPercent = 15; // 15% discount if more than 3 bookings are checked
            } else {
                discountPercent = 0;  // 1 booking or 0 bookings gets no discount
            }

            // Step 4: Calculate the monetary discount amount and subtract it from the subtotal
            let discountAmount = subtotal * (discountPercent / 100);
            let finalTotal = subtotal - discountAmount;
            
            // Step 5: Output the final calculation onto the web page, formatted neatly to 2 decimal places
            document.getElementById('totalDisplay').innerText = finalTotal.toFixed(2);
        }