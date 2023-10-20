
//MODAL Edit Customer Account
const modal_accout_container = document.querySelector('.js-modal-account-container')
const edit_account_btn= document.querySelectorAll('.js-edit-acc')
const modal_edit_accout = document.querySelector('.js-modal-edit-acc')
const modalClose_account =document.querySelector('.js-modal-close-acc')
const modal_save_change=document.querySelector('.js-modal-savechange')


function ShowAddProduct(){
    modal_edit_accout.classList.add('open')
}

function HideAddProduct(){
    modal_edit_accout.classList.remove('open')
}

edit_account_btn.forEach((item) => {
    item.addEventListener('click', ShowAddProduct)
} )
modalClose_account.addEventListener('click',HideAddProduct)

modal_save_change.addEventListener('click',HideAddProduct)


modal_accout_container.addEventListener('click',function(event){
    event.stopPropagation()
})


//MODAL DELETE ALERT
const modal_account_container_Dele = document.querySelector('.js-modal-acc-delete-container')
const Dele_acc_btn = document.querySelectorAll('.js-delete-acc')
const modal_account_Dele = document.querySelector('.js-modal-acc-delete')
const modal_Cancel =document.querySelector('.js-modal-acc-delete-cancel')
const modal_deleted =document.querySelector('.js-modal-acc-deleted')

function ShowAlertDelet(){
    modal_account_Dele .classList.add('open')
}

function HideAlertDelet(){
    modal_account_Dele.classList.remove('open')
}

Dele_acc_btn.forEach((item) => {
    item.addEventListener('click', () => {
        modal_account_Dele.classList.add('open');
    })
} )
modal_Cancel.addEventListener('click',() => {
    modal_account_Dele.classList.remove('open');
})

modal_deleted.addEventListener('click',() => {
    modal_account_Dele.classList.remove('open');
})


modal_account_Dele.addEventListener('click',function(event){
    event.stopPropagation()
})
