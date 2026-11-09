//Step 1: Selecting all the accordion button

        /*
        document.querySelectorAll() searches the HTML document 
        and it selects every element with the class accordion

        //we store all the accordion buttons in a constant variable called "accordion"

        querySelectorAll() returns a NodeList which is a collection of elements

        */

        const accordions = document.querySelectorAll(".accordion");

        //Step 2: Looping through each button
        accordions.forEach((accordion) =>  //ForEach allows us to go through every accordion button that we selected in Step 1
        {
            //Step 3: Add a click event
            accordion.addEventListener("click",() =>
            {
                //Step 4: Find the content panel 
                //NextElementSibling selects the HTML element that appears after the button
                //In our code that is the class called 'panel'
                //We store thr panel in a variable called 'panel'
                //This tells JavaScript which content belongs to the button that was clicked
                const panel = accordion.nextElementSibling;

                //Step 5: Check if the panel is Open
                //ClassList.contains() check whether an HTML element has a particular CSS class
                //here we check if the clicked button has the class "active"
                //If the class exists, the results are true
                //If the class does not exist the results are fake.

                const isOpen =
                accordion.classList.contains("active");

                //Step 6: Close all accordions
                accordions.forEach((item) =>{  //this loop will go through the accordion buttons again

                    item.classList.remove("active");  //removes the active CSS class form the current accordion button 

                    item.setAttribute("aria-expanded", "false");  
                    //aria-expanded tells screen readers whether the accordion is open or closed
                    //false means the content is closed

                    const itemPanel = item.nextElementSibling

                    itemPanel.classList.remove("open")
                    itemPanel.style.maxHeight = null;

                });

                //Step 7: Open the clicked Accordion
                //only if it was previously closed

                if(!isOpen){

                    accordion.classList.add("active");

                    accordion.setAttribute("aria-expanded", "true");

                    panel.classList.add("open")

                    panel.style.maxHeight = panel.scrollHeight +30 + "px";

                }

            });

        });