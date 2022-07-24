var photos = ["fbpro.jpg","failure.jpg","download.png","cartoon.jpg","cute.jpg"];
        let n_image = 0;
        let pr_image = 0;
        function current_image(current_photo){
            var index_photo = document.img.src=photos[current_photo];
            next_image();
        }
        function next_image(){ 
            n_image += 1;
            if(n_image >= photos.length){
                n_image = 0;
            } 
            else{
                pr_image = n_image;
             document.getElementById("next").setAttribute("onclick","current_image(n_image)"); 
            }  
        }

        function pre_image(previous_photo){
            pr_image--;
            previous_photo = pr_image;
           /*  document.getElementById("back").setAttribute("onclick","pre_image(pr_image)");*/
           /*  document.getElementById("next").setAttribute("onclick","current_image((pr_image))"); */ 
            var back_photo = document.img.src=photos[previous_photo];
            decrement_image();
        }
        function decrement_image(){
            if(pr_image<0){
                pr_image=photos.length;
            }
            else{
                document.getElementById("back").setAttribute("onclick","pre_image(pr_image)");   
            }
        }  