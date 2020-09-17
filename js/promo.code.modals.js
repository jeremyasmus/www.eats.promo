// PROMO CODE MODAL TRIGGERS

function copyPromoCode() {
  var copyText = document.getElementById("promoCode");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  var tooltip = document.getElementById("promoCodeTooltip");
  tooltip.innerHTML =  copyText.value + " copied!";
}

function outFunc() {
  var tooltip = document.getElementById("promoCodeTooltip");
  tooltip.innerHTML = "Copy promo code";
}

$(document).ready(function() {
  if (window.location.href.indexOf('?offer=pipcorn') > -1) {
    $('#pipcornPromo').modal('show');
  } else if (window.location.href.indexOf('?offer=platejoy') > -1) { 
	$('#platejoyPromo').modal('show');
  }
});