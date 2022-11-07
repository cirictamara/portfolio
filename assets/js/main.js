// VARIABLES
let url = window.location.pathname;

let navigationLinks = new Array(
    // Header Navigation
    {name: "Gift Boxes", href: "", element: "header"},
    {name: "Products", href: "/portfolio/category.html", element: "header"},
    {name: "Corporate", href: "", element: "header"},
    {name: "FAQs", href: "", element: "header"},
    {name: "Contact Us", href: "/portfolio/contact-us.html", element: "header"},
    // Footer Navigation
    // (level 01)
    {name: "About Us", href: "/portfolio/about-us.html", element: "footer", level: 1},
    {name: "Delivery Info", href: "", element: "footer", level: 1},
    {name: "Refund Policy", href: "/portfolio/devilery-refund-terms-privacy.html", element: "footer", level: 1},
    {name: "Refer a friend", href: "", element: "footer", level: 1},
    // (level 02)
    {name: "Terms &amp; Conditions", href: "", element: "footer", level: 2},
    {name: "Cookie Policy", href: "", element: "footer", level: 2},
    {name: "Private Policy", href: "", element: "footer", level: 2}
);

let socialMedia = new Array(
    {icon: "fa fa-facebook-f", href: "https://www.facebook.com/"},
    {icon: "fa fa-twitter", href: "https://www.twitter.com/"},
    {icon: "fa fa-instagram", href: "https://www.instagram.com/"},
    {icon: "fa fa-linkedin", href: "https://www.linkedin.com/"},
    {icon: "fa fa-play", href: "https://www.youtube.com/"}
);

let articles = new Array(
    // Section 04: Choose your favorite flavor 
    {element: "choose-favorite-flavor", image: {src: "flavor.png", alt: ""}, details: {name: "Duis eget lectus", price: null}},
    {element: "choose-favorite-flavor", image: {src: "flavor.png", alt: ""}, details: {name: "Nunc sollicitudin", price: null}},
    {element: "choose-favorite-flavor", image: {src: "flavor.png", alt: ""}, details: {name: "Donec posuere", price: null}}, 
    {element: "choose-favorite-flavor", image: {src: "flavor.png", alt: ""}, details: {name: "Praesent ultrices", price: null}},
    // Section 05: Supersweet Gifts 
    {element: "supersweet-gifts", image: {src: "flavor.png", alt: ""}, details: {name: "Duis eget lectus", price: 14.44}},
    {element: "supersweet-gifts", image: {src: "flavor.png", alt: ""}, details: {name: "Nunc sollicitudin", price: 14.44}},
    {element: "supersweet-gifts", image: {src: "flavor.png", alt: ""}, details: {name: "Donec posuere", price: 14.44}},
    {element: "supersweet-gifts", image: {src: "flavor.png", alt: ""}, details: {name: "Praesent ultrices", price: 14.44}}
);

let instagram = new Array(
    {src: "instagram.jpg", alt: ""},
    {src: "instagram.jpg", alt: ""},
    {src: "instagram.jpg", alt: ""},
    {src: "instagram.jpg", alt: ""},
    {src: "instagram.jpg", alt: ""}
);

// FUNCTIONS

window.onload = function() {
    // Header
    displayHeader();
    // Footer
    displayFooter();

    // Responsive Navigation Menu
    $("#responsive-nav-menu > ul").html($("#header-nav-menu > ul").html());
    // Open Navigation Menu
    $("#btn-open-nav-menu").click(function() {
        removeClasses(["#responsive-nav-menu", "#btn-close-nav-menu"], ["d-none"]);
    });
    // Close Navigation Menu
    $("#btn-close-nav-menu").click(function() {
        $(this).addClass("d-none");
        $("#responsive-nav-menu").addClass("d-none");
        $("body").css("overflow-y", "scroll");
    });

    // Social Media
    $(".social-media").html(displayList(socialMedia, true));

    // [index.html]
    if (url == "/portfolio/" || url == "/portfolio/index.html") {
        // Section 02:  Benefits
        let benefits = new Array(
            {icon: "fa fa-heart-o", text: "best sweets you’ll ever taste"},
            {icon: "fa fa-rocket", text: "same-day delivery across London"},
            {icon: "fa fa-motorcycle", text: "next-day delivery across the UK"},
            {icon: "fa fa-calendar", text: "weddings, events &amp; gifting"},
        );
        $("#benefits").html(function() {
            let html = "";
            for (let benefit of benefits) {
                html += `<article class = "benefit col-2 d-flex flex-row align-items-center">
                             <i class = "${benefit.icon} text-white fs-35"></i>
                             <p class = "mb-0 fs-15 text-white">${benefit.text}</p>
                         </article>`;
            } 
            return html;
        });

        // Section 03: How it works
        let steps = new Array("Suspendisse leo eros, efficitur et ipsum at, consectetur congue augue.", "Suspendisse leo eros, efficitur et ipsum at, consectetur congue augue.", "Suspendisse leo eros, efficitur et ipsum at, consectetur congue augue.", "Suspendisse leo eros, efficitur et ipsum at, consectetur congue augue.");
        $("#steps").html(function() {
            let html = "";
            for (let i = 0; i < steps.length; i++) {
                html += `<article class = "step px-4 bg-light-orange">
                             <span class = "text-orange step-number">${i+1}</span> 
                             <p class = "mb-2 mt-1 text-gray fs-15">${steps[i]}</p>
                         </article>`;
            } 
            return html;
        });

        // Section 04: Choose your favorite flavor 
        $("#choose-favorite-flavor main").before(
            displaySectionHeader("Choose your favorite flavor", "Suspendisse leo eros, efficitur et ipsum at, consectetur congue augue. Sed pharetra libero mattis tempor mattis. Orci varius natoque penatibus et magnis dis parturient montes.", {name: "View our sweet kingdom", href: ""})
        );
        $("#choose-favorite-flavor main").html(
            displayArticles(articles.filter(el => el.element == "choose-favorite-flavor"), false, false, "col-3")
        );

        // Section 05: Supersweet Gifts
        $("#supersweet-gifts main").before(
            displaySectionHeader("Supersweet Gifts", "Suspendisse leo eros, efficitur et ipsum at, consectetur congue augue. Sed pharetra libero mattis tempor mattis. Orci varius natoque penatibus et magnis dis parturient montes.")
        );
        $("#supersweet-gifts .slider").html(
            displayArticles(articles.filter(el => el.element == "supersweet-gifts"), true, true, "col-3")
        );

        // Slider Navigation 
        $(".slider").after(
            `<!-- Slider Navigation -->
            <div class = "slider-nav w-100 d-flex flex-row justify-content-center align-items-center">
                <button type = "button" class = "btn-previous m-0 icon-rotate btn text-orange position-relative">&#10132;</button>
                <button type = "button" class = "btn-next m-0 btn text-orange">&#10132;</button>
            </div>`
        );

        // Section 07: FAQs
        let cards = new Array(
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", paragraph: "Aenean interdum, arcu quis mattis facilisis, magna quam lobortis ligula, sit amet tempor massa felis et lacus. Duis id pretium lectus. Proin sapien nisi, ultrices a feugiat at, eleifend id purus."},
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", paragraph: "Aenean interdum, arcu quis mattis facilisis, magna quam lobortis ligula, sit amet tempor massa felis et lacus. Duis id pretium lectus. Proin sapien nisi, ultrices a feugiat at, eleifend id purus."},
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", paragraph: "Aenean interdum, arcu quis mattis facilisis, magna quam lobortis ligula, sit amet tempor massa felis et lacus. Duis id pretium lectus. Proin sapien nisi, ultrices a feugiat at, eleifend id purus."},
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", paragraph: "Aenean interdum, arcu quis mattis facilisis, magna quam lobortis ligula, sit amet tempor massa felis et lacus. Duis id pretium lectus. Proin sapien nisi, ultrices a feugiat at, eleifend id purus."},
            {title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", paragraph: "Aenean interdum, arcu quis mattis facilisis, magna quam lobortis ligula, sit amet tempor massa felis et lacus. Duis id pretium lectus. Proin sapien nisi, ultrices a feugiat at, eleifend id purus."}
         );
        $("#faqs > #cards").html(function() {
            let html = "";
            for (let i = 0;  i < cards.length; i++) {
                html += `<article id = "card-${i+1}" class = "card border-orange rounded-0 border-left-0 border-0 border-top" data-active = "${i == 0 ? "1" : "0"}">
                             <header class = "d-flex flex-row align-items-center position-relative ${i == 0 ? "mb-2 pb-2" : ""}">
                                 <!-- Read Option -->
                                 <span data-target = "card-${i+1}" class = "read-option cursor-pointer circle position-absolute bg-orange text-white rounded-circle d-flex flex-row justify-content-center align-items-center">${i == 0 ? "-" : "+"}</span>
                                 <h5 class = "mb-0 text-uppercase position-relative">${cards[i].title}</h5>
                             </header>
                             <main>
                                 <p data-target = "card-${i+1}" class = "${i != 0 ? "d-none" : ""} mb-0 text-gray fs-15">${cards[i].paragraph}</p>
                             </main>
                         </article>`;
            } 
            return html;
        });
        // Read More/Less Functionality
        $("span.read-option").click(function() {
            let id = $(this).data("target");
            let active = parseInt($(`#${id}`).data("active"));
            if (active == 1) {
                $(`#${id}`).data("active", "0");
                $(this).text("+");
                $(`p[data-target = "${id}"]`).addClass("d-none");
                $(`#${id} header`).removeClass(["mb-2", "pb-2"]);
            }
            else {
                $(`#${id}`).data("active", "1");
                $(this).text("-");
                $(`p[data-target = "${id}"]`).removeClass("d-none");
                $(`#${id} header`).addClass(["mb-2", "pb-2"]);
            }
        });

        // Section 08: Partners
        let partners = new Array(
            {src: "partner.jpg", alt: ""},
            {src: "partner.jpg", alt: ""},
            {src: "partner.jpg", alt: ""},
            {src: "partner.jpg", alt: ""},
            {src: "partner.jpg", alt: ""}
        );
        $("#partners .slider").html(displayArticles(partners, true, false, "w-20"));

        // Section 09: Instagram
        $("#instagram > main").html(displayArticles(instagram, false, false, "w-20"));
    } 
    // [devilery-refund-terms-privacy.html.html]
    else if (url == "/portfolio/devilery-refund-terms-privacy.html") {
        let devileryRefundTermsPrivacy = new Array(
            {
                title: "Lorem ipsum dolor sit amet consectetur",
                paragraphs: new Array("Vivamus ac ipsum eu urna pulvinar malesuada. Vivamus ultricies metus nisl, id ultrices diam egestas et. Nullam eu cursus mi. Donec ipsum leo, scelerisque vitae consequat in, semper in urna. Duis lectus nulla, pretium tristique lacus non, venenatis volutpat ex. Nunc imperdiet semper tellus, pharetra interdum nibh congue eget. Duis pharetra ligula in lacus tristique efficitur. Sed dui enim, aliquam ut aliquam id, egestas ac turpis. Donec vitae lobortis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at efficitur massa.", "urabitur feugiat rutrum nibh, ut interdum augue. Nullam sed sapien tincidunt nisl mattis vulputate sed eget justo. Duis in lobortis sapien, et porttitor enim. Mauris volutpat hendrerit dapibus.", "Proin felis est, convallis et purus ut, suscipit ornare sapien. Mauris scelerisque vitae nibh sit amet dignissim. Quisque sed diam nibh. Nulla sed efficitur ex. Maecenas quis tincidunt dui. Ut ac ullamcorper sem. Mauris bibendum fermentum dui. Sed eu tellus vel mauris luctus viverra facilisis eu eros. Aliquam erat volutpat. Vivamus congue posuere pretium. Quisque mollis cursus ex in finibus. Vestibulum viverra eros non nunc mattis, a vehicula urna porta.", "Nullam sit amet sem pulvinar, ornare lorem et, commodo diam. Vestibulum commodo orci ac euismod interdum. Maecenas at aliquam nibh. Nam justo orci, fringilla sit amet fringilla vitae, fringilla eget libero. Duis a ipsum quam. Pellentesque sodales justo sed diam luctus, vel ullamcorper urna imperdiet. Etiam scelerisque, ipsum bibendum ultrices volutpat, velit velit placerat leo, eget commodo elit dui sed lectus. Maecenas gravida erat sed eleifend placerat. Proin leo ex, vulputate id egestas non, eleifend in risus. Quisque pellentesque in ex ac aliquet. Maecenas feugiat accumsan sapien, sit amet accumsan nibh ornare at. Aliquam erat volutpat. Vivamus et tincidunt eros, eu ultrices nunc.", "Aenean eu dolor tincidunt, auctor nisl quis, congue elit. Nam fermentum felis turpis. Integer suscipit erat quis mauris fermentum, eget scelerisque nisi rutrum. Phasellus ut urna ex. Vivamus porta luctus diam, sit amet pharetra dolor finibus sed. Etiam in lacinia dolor. Aliquam interdum non massa vel sagittis. Aliquam est dui, egestas vel mi et, faucibus interdum sapien. Nullam cursus interdum felis eget luctus.")
            },
            {
                title: "Lorem ipsum dolor sit amet consectetur",
                paragraphs: new Array("Vivamus ac ipsum eu urna pulvinar malesuada. Vivamus ultricies metus nisl, id ultrices diam egestas et. Nullam eu cursus mi. Donec ipsum leo, scelerisque vitae consequat in, semper in urna. Duis lectus nulla, pretium tristique lacus non, venenatis volutpat ex. Nunc imperdiet semper tellus, pharetra interdum nibh congue eget. Duis pharetra ligula in lacus tristique efficitur. Sed dui enim, aliquam ut aliquam id, egestas ac turpis. Donec vitae lobortis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at efficitur massa.", "urabitur feugiat rutrum nibh, ut interdum augue. Nullam sed sapien tincidunt nisl mattis vulputate sed eget justo. Duis in lobortis sapien, et porttitor enim. Mauris volutpat hendrerit dapibus.", "Proin felis est, convallis et purus ut, suscipit ornare sapien. Mauris scelerisque vitae nibh sit amet dignissim. Quisque sed diam nibh. Nulla sed efficitur ex. Maecenas quis tincidunt dui. Ut ac ullamcorper sem. Mauris bibendum fermentum dui. Sed eu tellus vel mauris luctus viverra facilisis eu eros. Aliquam erat volutpat. Vivamus congue posuere pretium. Quisque mollis cursus ex in finibus. Vestibulum viverra eros non nunc mattis, a vehicula urna porta.", "Nullam sit amet sem pulvinar, ornare lorem et, commodo diam. Vestibulum commodo orci ac euismod interdum. Maecenas at aliquam nibh. Nam justo orci, fringilla sit amet fringilla vitae, fringilla eget libero. Duis a ipsum quam. Pellentesque sodales justo sed diam luctus, vel ullamcorper urna imperdiet. Etiam scelerisque, ipsum bibendum ultrices volutpat, velit velit placerat leo, eget commodo elit dui sed lectus. Maecenas gravida erat sed eleifend placerat. Proin leo ex, vulputate id egestas non, eleifend in risus. Quisque pellentesque in ex ac aliquet. Maecenas feugiat accumsan sapien, sit amet accumsan nibh ornare at. Aliquam erat volutpat. Vivamus et tincidunt eros, eu ultrices nunc.", "Aenean eu dolor tincidunt, auctor nisl quis, congue elit. Nam fermentum felis turpis. Integer suscipit erat quis mauris fermentum, eget scelerisque nisi rutrum. Phasellus ut urna ex. Vivamus porta luctus diam, sit amet pharetra dolor finibus sed. Etiam in lacinia dolor. Aliquam interdum non massa vel sagittis. Aliquam est dui, egestas vel mi et, faucibus interdum sapien. Nullam cursus interdum felis eget luctus.")
            },
            {
                title: "Lorem ipsum dolor sit amet consectetur",
                paragraphs: new Array("Vivamus ac ipsum eu urna pulvinar malesuada. Vivamus ultricies metus nisl, id ultrices diam egestas et. Nullam eu cursus mi. Donec ipsum leo, scelerisque vitae consequat in, semper in urna. Duis lectus nulla, pretium tristique lacus non, venenatis volutpat ex. Nunc imperdiet semper tellus, pharetra interdum nibh congue eget. Duis pharetra ligula in lacus tristique efficitur. Sed dui enim, aliquam ut aliquam id, egestas ac turpis. Donec vitae lobortis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at efficitur massa.", "urabitur feugiat rutrum nibh, ut interdum augue. Nullam sed sapien tincidunt nisl mattis vulputate sed eget justo. Duis in lobortis sapien, et porttitor enim. Mauris volutpat hendrerit dapibus.", "Proin felis est, convallis et purus ut, suscipit ornare sapien. Mauris scelerisque vitae nibh sit amet dignissim. Quisque sed diam nibh. Nulla sed efficitur ex. Maecenas quis tincidunt dui. Ut ac ullamcorper sem. Mauris bibendum fermentum dui. Sed eu tellus vel mauris luctus viverra facilisis eu eros. Aliquam erat volutpat. Vivamus congue posuere pretium. Quisque mollis cursus ex in finibus. Vestibulum viverra eros non nunc mattis, a vehicula urna porta.")
            }
        );
        $("section > main > div").html(function() {
            let html = "";
            for (let el of devileryRefundTermsPrivacy) {
                html += `<article class = "col-10 mb-3 devilery-refund-term-privacy">
                             <header class = "mb-4">
                                 <h4 class = "text-uppercase fs-25">${el.title}</h4>
                             </header>
                             <main>`;
                for (let p of el.paragraphs) 
                    html += `<p class = "text-gray fs-15">${p}</p>`;
                html += `</main>
                     </article>`;
            }
            return html;
        });
    }
    // [about-us.html]
    else if (url == "/portfolio/about-us.html") {
        // Section 02: Choose your favorite flavor
        $("#choose-favorite-flavor main").before(
            displaySectionHeader("Choose your favorite flavor", "Suspendisse leo eros, efficitur et ipsum at, consectetur congue augue. Sed pharetra libero mattis tempor mattis. Orci varius natoque penatibus et magnis dis parturient montes.", {name: "View our sweet kingdom", href: ""})
        );
        $("#choose-favorite-flavor main").html(
            displayArticles(articles.filter(el => el.element == "choose-favorite-flavor"), false, false, "col-3")
        );
        
        // Section 03: Instagram
        $("#instagram > main").html(displayArticles(instagram, false, false, "w-20"));
    }
    // [category.html]
    else if (url == "/portfolio/category.html") {
        let filters = new Array(
            {name: "Product Search", items: null},
            {name: "Price", items: null},
            {name: "Dietary", items: new Array("Vegan", "Gluten Free", "Lorem Ipsum", "Dolor sit Amet", "Consectetur", "Adipiscing", "Nullam Auctor")},
            {name: "Categories", items: new Array("Gifts by post", "Gift boxes", "Brownies", "Cookies", "Marshmallows", "Chocolates", "Energy/Protein", "Cakes", "Sweets", "Gifts by occasion", "Festivals", "Exhibitions", "New Starters", "PR dropsen Free")}
        );
        $("#filters-nav").html(function() {
            let html = "";
            for (let filter of filters) {
                let name = (filter.name.replace(" ", "-")).toLowerCase();
                html += `<li class = "border-light-gray border-bottom" data-target = "${name}">
                            <p class = "pt-2 pb-1 px-3 mb-0 border-bottom border-light-gray d-flex flex-row justify-content-between align-items-center text-dark">
                                 ${filter.name} <span class = "text-orange fs-20">&ndash;</span>
                             </p>`;
                if (filter.items == null) {
                    html += `<div class = "p-3 d-flex flex-row flex-wrap justify-content-between align-items-center">`;
                    if (filter.name == "Product Search")
                        html += `<input type = "search" name = "search-product" id = "search-product" class = "w-100 border border-light-gray px-2 py-1 fs-14" placeholder = "Search ..." />`;
                    else if (filter.name == "Price") 
                        html += `<div class = "w-100 mb-3 position-relative d-flex flex-row align-items-center">
                                     <input type = "range" class = "w-100" id = "price-range-1" min = "14.00" max = "129.00" step = "" value = "14.00" />
                                     <input type = "range" class = "w-100 position-absolute" id = "price-range-2" min = "-129.00" max = "14.00" step = "" value = "14.00" />
                                 </div>
                                 <button type = "button" id = "btn-filter" class = "border fs-14 py-2 px-3 text-dark border-light-gray bg-transparent">Filter</button>
                                 <p class = "mb-0 pt-1 text-orange fs-14">Price: &pound;14.00 - &pound;129.00</p>`;
                    html += "</div>";
                }
                else {
                    html += `<ul class = "px-3 py-3">`;
                    for (let item of filter.items) 
                        html += `<li class = "fs-15 text-gray" data-target = "${name}">${item}</li>`;
                    html += `</ul>`;
                }
                html += "</li>";
            }
            return html;
        });
        $("#filtered-products > main > div").html(function() {
            let html = "";
            for (let i = 1; i <= 9; i++) {
                html += `<!-- Product -->
                         <article class = "col-4 d-flex flex-column align-items-center">
                             <figure class = "w-100">
                                 <img src = "assets/img/flavor.png" alt = "" class = "" />
                                 <figcaption class = "mb-0 text-uppercase">
                                     <p class = "mb-1 fs-15">Duis eget legtus</p>
                                     <p class = "mb-0 fs-15">&pound;14.00</p>
                                 </figcaption>
                             </figure>
                             <ul id = "icons" class = "nav mb-3 text-center">
                                 <li class = "rounded-circle icon bg-orange d-flex flex-row justify-content-center align-items-center">
                                     <i class = "fa fa-leaf text-white"></i>
                                 </li>
                             </ul>
                             <button type = "button" id = "btn-view-more" class = "btn bg-orange text-white rounded fs-15 position-relative">
                                 View more <span class = "text-white fs-15">&#10095;</span>
                             </button>
                         </article>`;
            }
            return html;
        });
    }
}

// Function 01: 
function displayHeader() {
    let html = `<!-- Navigation Menu Button -->
                <span id = "btn-open-nav-menu" class = "d-none cursor-pointer">
                    <i class = "fa fa-bars text-dark fs-30"></i>
                </span>
                <!-- Logo -->
                <div id = "logo">
                    <a href = "/portfolio/index.html" class = "w-100">
                        <img src = "assets/img/logo.png" alt = "" />
                    </a>
                </div>
                <!-- Navigation Menu -->
                <nav id = "header-nav-menu" class = "col-6 nav-pages">${displayList(navigationLinks.filter(link => link.element == "header"))}</nav>
                <div class = "d-flex flex-row align-items-center">
                    <!-- Login Button -->
                    <button type = "button" id = "btn-login" class = "btn bg-orange text-white rounded fs-14 position-relative">
                        <i class = "fa fa-user d-inline-block align-middle text-white"></i> Login
                    </button>
                    <!-- Cart Status -->
                    <div class = "position-relative">
                        <i class = "fa fa-shopping-bag"></i>
                        <span id = "cart-status" class = "position-absolute d-flex flex-row align-items-center justify-content-center bg-orange text-white rounded-circle circle">0</span>
                    </div>
                </div>`;
    $("#header").html(html);
}

// Function 02:
function displayFooter() {
    let html = `<!-- Level 01 -->
                <div class = "row-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <!-- Left Side -->
                    <div class = "col-12 col-md-7 d-flex flex-row flex-wrap align-items-center">
                        <!-- Subscribe -->
                        <div class = "d-flex flex-row align-items-center">
                            <form action = "" method = "" id = "subscribe-form" name = "subscribe" class = "d-flex flex-row align-items-center">
                                <input type = "email" id = "email" name = "email" class = "bg-transparent h-100 rounded border-orange fs-15" />
                                <input type = "submit" name = "btn-subscribe" id = "btn-subscribe" value = "Subscribe" class = "h-100 text-uppercase fs-14 position-relative btn bg-orange text-white rounded position-relative" />
                            </form>
                        </div>
                        <!-- Social Media -->
                        <nav class = "social-media"></nav>
                        <!-- Navigation List -->
                        <nav class = "mt-4 nav-pages">${displayList(navigationLinks.filter(link => link.element == "footer" && link.level == 1), false, "p-0")}</nav>
                    </div>
                    <!-- Right Side -->
                    <div id = "phone-number" class = "d-flex flex-row align-items-center">
                        <span class = "rounded-circle bg-orange d-flex flex-row justify-content-center align-items-center">
                            <i class = "fa fa-phone text-white fs-35"></i>
                        </span>
                        <p class = "mb-0">0203 397 0529</p>
                    </div>
                </div>
                <!-- Level 02 -->
                <div class = "mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center border-top border-orange">
                    <!-- Copyright -->
                    <small class = "text-gray fs-14 order-3 order-md-1">&copy; 2022 Popkakery&#8482; Products Limited. All rights reserved.</small>
                    <!-- Image -->
                    <div class = "order-2">
                        <img src = "assets/img/detail.jpg" alt = "" />
                    </div>
                    <!-- Navigation List -->
                    <nav class = "nav-pages order-1 order-md-3">${displayList(navigationLinks.filter(link => link.element == "footer" && link.level == 2), false, "p-0 fs-14 text-gray")}</nav>
                </div>`;
    $("#footer").html(html);
}

// Function 03: 
function displayList(links, icons = false, classes) {
    let html = `<ul class = "nav">`;
    for (let link of links) {
        html += `<li class = "nav-item ${icons ? "rounded-circle border border-orange" : ""}">
                     <a href = "${link.href == url ? "#" : link.href}" class = "nav-link ${classes} ${icons ? "h-100 w-100 d-flex flex-row justify-content-center align-items-center p-0" : ""}">
                         ${icons ? `<i class = "${link.icon} text-orange"></i>` : link.name}
                     </a>
                 </li>`;
    }
    return html + "</ul>";
}

// Function 04:
function displaySectionHeader(title, paragraph, link = null) {
    return `<!-- Section Header -->
            <header class = "w-50 section-header">
                <h3 class = "mb-4 text-uppercase">${title}</h3>
                <p class = "${link == null ? "mb-0" : "mb-4 pb-3"} text-gray">${paragraph}</p>
                ${link != null ? `<a href = "${link.href}" class = "text-orange border-orange border-bottom">${link.name}</a>` : ""}
            </header>`;
}

// Function 05:
function displayArticles(articles, slider = false, options = false, classes = "") {
    let html = "";
    for (let i = 0; i < articles.length; i++) {
        html += `<article class = "${slider ? "slide" : ""} ${classes}">`;
        if (articles[i].details != null)
            html += `<figure class = "mb-4"> 
                         <img src = "assets/img/${articles[i].image.src}" alt = "${articles[i].image.alt}" />
                         <figcaption class = "text-uppercase p-0">
                             <p class = "mb-2 fs-15">${articles[i].details.name}</p>
                             ${articles[i].details.price != null ? `<p class = "mb-0 fs-15">&pound;${articles[i].details.price}</p>` : ""}
                         </figcaption>
                     </figure>`;
        else html += `<img src = "assets/img/${articles[i].src}" alt = "${articles[i].alt}" />`;
        if (options) {
            html += `<!-- Shop Options -->
                     <div id = "shop-options" class = "w-100 d-flex flex-row justify-content-center">
                         <span class = "rounded border-orange border position-relative">-</span>
                         <span data-product = "" class = "fs-15 rounded border-orange border position-relative">1</span>
                         <span class = "rounded border-orange border position-relative">+</span>
                         <a id = "btn-add-to-cart" class = "btn bg-orange text-white rounded position-relative fs-14 position-relative" href = "/portfolio/product.html">
                             Add to cart <span class = "text-white fs-17">&#10095;</span>
                         </a>
                     </div>`;
        }
        html += "</article>";
    }
    return html;
}

// Function 06:
function removeClasses(elements, classes) {
	for (let element of elements)
        for (let i in classes) 
            $(element).removeClass(classes[i]);
}

// Function 07:
function addClasses(elements, classes) {
	for (let element of elements)
        for (let i in classes) 
            $(element).addClass(classes[i]);
}
