    
            const modal_addproduct_container = document.querySelector('.js-modal-add-container')
            const adProductbtn = document.querySelector('.js-add-product')
            const modal_add_product = document.querySelector('.js-modal-add')
            const modal_product_Close =document.querySelector('.js-modal-add-close')
            const modal_save_add=document.querySelector('.js-modal-saveadd')

            function ShowAddProduct(){
                modal_add_product.classList.add('open')
            }

            function HideAddProduct(){
                modal_add_product.classList.remove('open')
            }

            modal_product_Close.addEventListener('click',HideAddProduct)
            adProductbtn.addEventListener('click',ShowAddProduct)

            modal_save_add.addEventListener('click',HideAddProduct)

            modal_addproduct_container.addEventListener('click',function(event){
                event.stopPropagation()
            })

        //<!--End Java script modal add -->



    //    <!-- Java script modal edit -->

            const modal_product_edit_container = document.querySelector('.js-modal-edit-container')
            const editProductbtn = document.querySelectorAll('.js-add-edit-product')
            const modal_edit = document.querySelector('.js-modal-edit')
            const modalClose_edit =document.querySelector('.js-modal-edit-close')
            const modal_product_save_change=document.querySelector('.js-modal-product-savechange')


            function ShowEditProduct(){
                modal_edit.classList.add('open')
            }

            function HideEditProduct(){
                modal_edit.classList.remove('open')
            }

            modalClose_edit.addEventListener('click',HideEditProduct)

            editProductbtn.forEach((item) => {
                item.addEventListener('click', () => {
                    modal_edit.classList.add('open');
                })
            } )

            modal_product_save_change.addEventListener('click',HideEditProduct)

            modal_product_edit_container.addEventListener('click',function(event){
                event.stopPropagation()
            })

        // <!-- End Java script modal edit-->



        // <!-- Java script modal delete -->
    
            const modal_product_container_Dele = document.querySelector('.js-modal-product-delete-container')
            const Dele_product_btn = document.querySelectorAll('.js-delete-product')
            const modal_product_Dele = document.querySelector('.js-modal-product-delete')
            const modal__product_Cancel =document.querySelector('.js-modal-product-delete-cancel')
            const modal_product_deleted =document.querySelector('.js-modal-product-deleted')

    
            function ShowAlertDelet(){
                modal_product_Dele.classList.add('open')
            }
    
            function HideAlertDelet(){
                modal_product_Dele.classList.remove('open')
            }
            
            Dele_product_btn.forEach((item) => {
                item.addEventListener('click', () => {
                    modal_product_Dele.classList.add('open');
                })
            } )
            modal__product_Cancel.addEventListener('click',() => {
                modal_product_Dele.classList.remove('open');
            })

            modal_product_deleted .addEventListener('click',() => {
                modal_product_Dele.classList.remove('open');
            })
            modal_product_Dele .addEventListener('click',function(event){
                modal_product_DelestopPropagation()
            })

        // <!-- End Java script modal delete -->