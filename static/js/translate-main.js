var dataReload = document.querySelectorAll("[data-reload")

var findlink = document.getElementById("logoLink")

var addhash1 = document.getElementById("firstCategory")

var addhash2 = document.getElementById("secondCategory")

var HashFeatured1 = document.getElementById("featuredToy1")
var HashFeatured2 = document.getElementById("featuredToy2")
var HashFeatured3 = document.getElementById("featuredToy3")
var HashFeatured4 = document.getElementById("featuredToy4")
var HashFeatured5 = document.getElementById("featuredToy5")
var HashFeatured6 = document.getElementById("featuredToy6")
var HashFeatured7 = document.getElementById("featuredToy7")


var language = {
    ka: {
        FirstTab: "პოპულარული",
        SecondTab: "მიტანის სერვისი",
        ThirdTab: "კონტაქტი",
        button: "შეძენა",
        bunnies: "ბაჭიები",
        animals: "სხვა ცხოველები",
        popular: "პოპულარული სათამაშოები",
        tbilisi: "თბილისში მიტანა შესაძლებელია შეკვეთიდან მეორე დღეს. მიტანის ღირებულება ცენტრალურ უბნებში 6 ლარი, ხოლო გარეუბნებში 8 ლარია.",
        regions: "რეგიონებში სათამაშოები იგზავნება ფოსტით. გაგზავნის ღირებულება ქალაქებში 10 ლარი, ხოლო სოფლებში 12 ლარია. ამანათის ჩამოსვლის დრო დამოკიდებულია რეგიონზე.",
    },
    eng: {
        FirstTab: "Popular",
        SecondTab: "Delivery Service",
        ThirdTab: "Contact",
        button: "Buy",
        bunnies: "Bunnies",
        animals: "Other Animals",
        popular: "Popular Toys",
        tbilisi: "We are delivering in Tbilisi on a second day from ordering. Delivery price in central parts of city is 6Gel and in outskirts - 8Gel.",
        regions: "We are sending toys in regions by post. Delivery price for towns is 10Gel and for villages 12Gel. The time of delivery depends on the address.",
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        featuredProducts.textContent = language.eng.FirstTab;
        deliveryTab.textContent = language.eng.SecondTab;
        contactTab.textContent = language.eng.ThirdTab;
        buyButton1.textContent = language.eng.button;
        buyButton2.textContent = language.eng.button;
        buyButton3.textContent = language.eng.button;
        buyButton4.textContent = language.eng.button;
        buyButton5.textContent = language.eng.button;
        buyButton6.textContent = language.eng.button;
        buyButton7.textContent = language.eng.button;
        categoryBunnies.textContent = language.eng.bunnies;
        categoryAnimals.textContent = language.eng.animals;
        popularToys.textContent = language.eng.popular;
        deliverySectionTitle.textContent = language.eng.SecondTab;
        deliveryTbilisi.textContent = language.eng.tbilisi;
        deliveryRegions.textContent = language.eng.regions;
        contactSectionTitle.textContent = language.eng.ThirdTab;

        const myfont = document.querySelectorAll("#featuredProducts, #deliveryTab, #contactTab, #buyButton1, #buyButton2, #buyButton3, #buyButton4, #buyButton5, #buyButton6, #buyButton7, #categoryBunnies, #categoryAnimals, #popularToys, #deliverySectionTitle, #deliveryTbilisi, #deliveryRegions, #contactSectionTitle");
        
        myfont.forEach((element) => {
            element.style.fontFamily = "Handlee";
        });

            findlink.href = "#eng";
            addhash1.href = "static/pages/bunnies.html#eng"
            addhash2.href = "static/pages/other-animals.html#eng"
            HashFeatured1.href = "static/pages/product-page.html#eng"
            HashFeatured2.href = "static/pages/product-page.html#eng"
            HashFeatured3.href = "static/pages/product-page.html#eng"
            HashFeatured4.href = "static/pages/product-page.html#eng"
            HashFeatured5.href = "static/pages/product-page.html#eng"
            HashFeatured6.href = "static/pages/product-page.html#eng"
            HashFeatured7.href = "static/pages/product-page.html#eng"
    }
}

function PageReload() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }