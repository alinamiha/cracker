$('#package-size-btn').on('click', function () {
    $('.package-size-picker-list').toggle()
    $('#package-size-btn svg').toggleClass('active-size-btn');
})
$('.add-to-cart-container').mouseover(function () {
    $('#add-to-cart-btn').addClass('active-add-btn');
    $('#add-to-cart-btn-hover').addClass('active-add-btn');
})
$('.add-to-cart-container').mouseout(function () {
    $('#add-to-cart-btn').removeClass('active-add-btn');
    $('#add-to-cart-btn-hover').removeClass('active-add-btn');
})
$('.header_order_details_item_dropdown_link').on('click',function () {
    $('.details-drop-down-list').toggle()
    $('.header_order_details_item_dropdown_link small').toggleClass('active-detailes');
})
$('.input-range').on('input',function () {
    let value = $(this).val()
    $(this).siblings('.percent').children('span').text(value)
})
$('.input-range').on('change',function () {


    let current_value = $(this).val()
    let current_input = $(this).attr('name')

    let ranges = {
        input_1: parseInt($('.input-range[name="input_1"]').val()),
        input_2: parseInt($('.input-range[name="input_2"]').val()),
        input_3: parseInt($('.input-range[name="input_3"]').val()),
        input_4: parseInt($('.input-range[name="input_4"]').val())
    }

    let over_sum = (ranges.input_1 + ranges.input_2 + ranges.input_3 + ranges.input_4) - 100


    setTimeout(function () {


        if (over_sum >= 0){
            if (ranges.input_4 != 0){
                let max_minus = 0;
                let rest = 0;

                if (ranges.input_4 >= over_sum){
                    max_minus = over_sum
                }else{
                    max_minus = ranges.input_4
                    rest = over_sum - max_minus
                }

                for (let i = 0;  i < max_minus; i++){
                    setTimeout(function (){
                        $('.input-range[name="input_4"]').val(parseInt($('.input-range[name="input_4"]').val()) - 1)
                        $('.input-range[name="input_4"]').siblings('.percent').children('span').text($('.input-range[name="input_4"]').val())
                    },50 * i)
                }
                for (let i = 0;  i < rest; i++){
                    setTimeout(function (){
                        $('.input-range[name="' + current_input + '"]').val(parseInt($('.input-range[name="' + current_input + '"]').val()) - 1)
                        $('.input-range[name="' + current_input + '"]').siblings('.percent').children('span').text($('.input-range[name="' + current_input + '"]').val())
                    },50 * i)
                }

            }else{
                for (let i = 0;  i < over_sum; i++){
                    setTimeout(function (){
                        $('.input-range[name="' + current_input + '"]').val(parseInt($('.input-range[name="' + current_input + '"]').val()) - 1)
                        $('.input-range[name="' + current_input + '"]').siblings('.percent').children('span').text($('.input-range[name="' + current_input + '"]').val())
                    },50 * i)
                }
            }

        }else{
            over_sum *= -1;
            for (let i = 0;  i < over_sum; i++){
                setTimeout(function (){
                    $('.input-range[name="input_4"]').val(parseInt($('.input-range[name="input_4"]').val()) + 1)
                    $('.input-range[name="input_4"]').siblings('.percent').children('span').text($('.input-range[name="input_4"]').val())
                },50 * i)
            }

        }

    },500)





})

$('.package-size-picker-list li').click(function () {
    let text = $(this).text()
    let value = $(this).attr('data-size')
    $('#package-size-btn span').text(text)
    $('#package-size-btn').attr('data-size', value)
    $('.package-size-picker-list').toggle()
})

$('#add-to-cart-btn').click(function (){
    let ranges = {
        input_1: parseInt($('.input-range[name="input_1"]').val()),
        input_2: parseInt($('.input-range[name="input_2"]').val()),
        input_3: parseInt($('.input-range[name="input_3"]').val()),
        input_4: parseInt($('.input-range[name="input_4"]').val()),
        size:  $('#package-size-btn').attr('data-size')
    }
    addToDetailes(ranges)

})


function addToDetailes(package_item){
    let package_html = `
     <tr class="details-item">
        <td><img src="src/img/semen-black.png" alt="semen"></td>
        <td class="detailes-percent">` + package_item.input_1 + `%</td>
        <td class="detailes-percent">` + package_item.input_2 + `%</td>
        <td class="detailes-percent">` + package_item.input_3 + `%</td>
        <td class="detailes-percent">` + package_item.input_4 + `%</td>
        <td style="text-align: end">1.50kg</td>
        <td style="text-align: end">81.50€</td>
        <td class="d-flex justify-content-end">
            <button class="delete-item">
                <svg>
                    <use xlink:href="src/svg/crecker.svg#close"/>
                </svg>
            </button>
        </td>
    </tr>
    `
    $('.details-body').append(package_html)
    $('.header_order_details_item_semen small').text($('.details-item').length)
    $('.delete-item').click(function () {
        $(this).parents('.details-item').remove()
        $('.header_order_details_item_semen small').text($('.details-item').length)
    })
}
$('.drop-down-list-close button').click(function () {
    $('.details-drop-down-list').toggle()
})
$(function () {
    $('.header_order_details_item_semen small').text($('.details-item').length)
})

$(".burger-menu").on('click', function () {
    $(this).toggleClass('active-burger')
    $('.header_menu').toggleClass('mobile-header-visible')
})
