! function(e, t) {
    "use strict";
    "function" != typeof ElementsKit_Helper.swiper && (ElementsKit_Helper.swiper = function(e, i) {
        var n = e.get(0);
        if ("function" != typeof Swiper) {
            return new(0, t.utils.swiper)(n, i).then((e => e))
        } {
            const e = new Swiper(n, i);
            return Promise.resolve(e)
        }
    });
    let i = {
        init: function() {
            var n = {
                "elementskit-advance-accordion.default": i.Advanced_Accordion,
                "elementskit-advanced-toggle.default": i.Advanced_Toggle,
                "elementskit-tab.default": i.Advanced_Tab,
                "elementskit-gallery.default": i.Gallery,
                "elementskit-motion-text.default": i.MotionText,
                "elementskit-popup-modal.default": i.PopupModal,
                "elementskit-zoom.default": i.Zoom,
                "elementskit-unfold.default": i.Unfold,
                "elementskit-woo-product-carousel.default": i.Woo_Product_slider,
                "elementskit-woo-mini-cart.default": i.Mini_Cart,
                "elementskit-table.default": i.Table,
                "elementskit-timeline.default": i.TimeLine,
                "elementskit-creative-button.default": i.Creative_Button,
                "elementskit-hotspot.default": i.Hotspot,
                "ekit-vertical-menu.default": i.Vertical_Menu,
                "elementskit-video-gallery.default": i.Video_Gallery,
                "elementskit-facebook-feed.default": i.Facebook_Feed,
                "elementskit-facebook-review.default": i.Facebook_Review,
                "elementskit-yelp.default": i.Yelp_Review,
                "elementskit-blog-posts.default": i.BlogPosts,
                "elementskit-advanced-slider.default": i.Advanced_Slider,
                "elementskit-whatsapp.default": i.Whatsapp,
                "elementskit-fancy-animated-text.default": i.Fancy_Animated_Text,
                "elementskit-price-menu.default": i.Price_Menu,
                "elementskit-team-slider.default": i.Team_Slider,
                "elementskit-audio-player.default": i.Audio_Player,
                "elementskit-stylish-list.default": i.Stylish_List,
                "elementskit-flip-box.default": i.Flip_box,
                "elementskit-image-morphing.default": i.Image_Morphing,
                "elementskit-image-swap.default": i.Image_Swap,
                "elementskit-content-ticker.default": i.Content_Ticker,
                "elementskit-coupon-code.default": i.Coupon_Code,
                "elementskit-comparison-table.default": i.Comparison_Table,
                "elementskit-interactive-links.default": i.Interactive_Links
            };
            e.each(n, (function(e, i) {
                t.hooks.addAction("frontend/element_ready/" + e, i)
            }))
        },
        WidgetAreaJSUpdate: function() {
            var t = e(this),
                i = ["ekit-nav-menu", "ekit-vertical-menu", "gallery", "accordion"],
                n = 0;
            t.find(".elementor-widget").each((function() {
                i.map((t => {
                    e(this).hasClass("elementor-widget-" + t) || (n += 1)
                })), i.length === n && elementorFrontend.elementsHandler.runReadyTrigger(e(this)), n = 0
            })), t.find(".elementskit-image-comparison").trigger("resize.twentytwenty")
        },
        Social_Review_Slider: function(e) {
            var i = e.data("config");
            if (void 0 === i) return;
            i ? .arrows && (i.navigation = {
                prevEl: e.find(".swiper-button-prev").get(0),
                nextEl: e.find(".swiper-button-next").get(0)
            }), i ? .dots && (i.pagination = {
                el: e.find(".swiper-pagination").get(0),
                type: "bullets",
                clickable: !0
            });
            let n = e.find(`.${t.config.swiperClass}`);
            ElementsKit_Helper.swiper(n, i).then((function(e) {
                i.autoplay && i.pauseOnHover && n.hover((function() {
                    e.autoplay.stop()
                }), (function() {
                    e.autoplay.start()
                }))
            }))
        },
        Handle_Review_More: function(t) {
            e(t).find(".more").each((function() {
                e(this).click((() => {
                    let t = e(e(this).parent().get(0)).find("span").first();
                    !0 === e(this).data("collapsed") ? (e(t).text(e(this).data("text")), e(this).text("...Collapse")) : (e(t).text(e(this).data("text").substr(0, 120)), e(this).text("...More")), e(this).data("collapsed", !e(this).data("collapsed"))
                }))
            }))
        },
        ShowModal: function(t, i, n) {
            if (n) return;
            e.find(".ekit-popup-modal.show").forEach((t => e(t).removeClass("show")));
            let a = i.data("animation");
            t.addClass("show"), a && i.addClass(a)
        },
        Advanced_Accordion: function(t) {
            t.find(".elementskit-card > .collapse").on("shown.bs.collapse", (function() {
                var n = e(this);
                i.WidgetAreaJSUpdate.call(n), ElementsKit_Helper.ajaxLoading(t, n)
            })).filter(".show").trigger("shown.bs.collapse")
        },
        Advanced_Toggle: function(t) {
            var n = t.find('[data-ekit-toggle="tab"]'),
                a = t.find(".ekit-custom-control-input");
            if (n.on("click", (function(t) {
                    t.preventDefault(), e(this).tab("show")
                })), t.find(".elemenetskit-toggle-indicator").length > 0) {
                let s = t.find(".elemenetskit-toggle-indicator"),
                    o = t.find(".elementskit-toggle-nav-link.active");

                function l(e, t) {
                    let i = "click" === e ? t.outerWidth() : o.outerWidth(),
                        n = "click" === e ? t.outerHeight() : o.outerHeight(),
                        a = "click" === e ? t.position().left : o.position().left,
                        l = "click" === e ? t.position().top : o.position().top;
                    s.attr("class", "elemenetskit-toggle-indicator " + t.parents("li").data("elementor_current_item")), s.css({
                        width: i,
                        height: n,
                        left: a,
                        top: l
                    })
                }
                l(null, o), t.find(".elementkit-tab-nav > li > a").on("click", (function(t) {
                    l(t.type, e(this))
                }))
            }
            a.on("click", (function() {
                var t = this.checked ? ".elementskit-switch-nav-link-2" : ".elementskit-switch-nav-link-1";
                e(this).siblings(t).tab("show")
            })), n.on("shown.bs.tab", (function() {
                var n = t.find(e(this).attr("href"));
                a.length && (a[0].checked = this.getAttribute("data-toggled")), i.WidgetAreaJSUpdate.call(n), ElementsKit_Helper.ajaxLoading(t, n)
            })).filter(".active").trigger("shown.bs.tab")
        },
        Advanced_Tab: function(n) {
            var a = n.find('[data-ekit-toggle="tab"]'),
                s = a.data("ekit-toggle-trigger"),
                o = n.data("settings");
            t.isEditMode() && (o = t.config.elements.data[n.data("model-cid")].attributes), ElementsKit_Helper.triggerClickOnEvent(s, a), a.on("shown.bs.tab", (function() {
                let t = n.find(e(this)).data("target").substring(1),
                    s = n.find(`#${t}`);
                i.WidgetAreaJSUpdate.call(s), "yes" == o ? .ekit_hash_change && a.click("shown.bs.tab", (function() {
                    ElementsKit_Helper.setURLHash(o, this, "ekit-handler-id")
                })), ElementsKit_Helper.ajaxLoading(n, s)
            })).filter(".active").trigger("shown.bs.tab")
        },
        Gallery: function(t) {
            var i = t.find(".ekit_gallery_grid"),
                n = i.data("grid-config");
            i.imagesLoaded((function() {
                i.isotope(n)
            })), t.find(".filter-button-wraper").find("a").on("click", (function(t) {
                t.preventDefault();
                var n = e(this);
                n.parents(".option-set").find(".selected").removeClass("selected"), n.addClass("selected"), i.isotope({
                    filter: n.data("option-value")
                })
            }));
            var a = t.find(".ekit-gallery-portfolio-tilt"),
                s = i.data("tilt-config");
            a.tilt(s)
        },
        MotionText: function(t) {
            var i = t.find(".ekit_motion_text_title");
            if (i.hasClass("ekit_char_based")) {
                var n = i.children(".ekit_motion_text"),
                    a = n.text().split(""),
                    s = i.data("ekit-animation-delay-s"),
                    o = s,
                    l = "";
                e.each(a, (function(e, t) {
                    l += " " === t ? t : '<span class="ekit-letter" style="animation-delay: ' + s + "ms; -moz-animation-delay: " + s + "ms; -webkit-animation-delay: " + s + 'ms;">' + t + "</span>", s += o
                })), n.html(l)
            }
            i.elementorWaypoint((function() {
                var e = this.adapter.$element.data("animate-class");
                this.adapter.$element.addClass(e).css("opacity", 1), this.destroy()
            }), {
                offset: "100%"
            })
        },
        PopupModal: function(e) {
            var t = e.data("id"),
                n = e.data("settings"),
                a = n && "enable_cookie_consent" in n,
                s = a && document.cookie.match("popup_cookie_" + t),
                o = e.find(".ekit-popup-modal"),
                l = e.find(".ekit-popup__content"),
                r = o.data("toggletype"),
                d = o.data("toggleafter");
            "time" === r && d > 0 && setTimeout((() => {
                i.ShowModal(o, l, s)
            }), 1e3 * d);
            var c = e.find(".ekit-popup-modal__toggler-wrapper button, .ekit-popup-modal__toggler-wrapper img"),
                p = e.find(".ekit-popup__close, .ekit-popup-modal__close, .ekit-popup-footer__close");
            c.on("click", (function(e) {
                e.preventDefault(), i.ShowModal(o, l)
            })), p.on("click", (function(e) {
                e.preventDefault(), o.addClass("closing"), setTimeout((() => {
                    o.removeClass("show"), o.removeClass("closing")
                }), 450), a && (document.cookie = "popup_cookie_" + t + "=1; path=/")
            }))
        },
        Zoom: function(e) {
            var t = e.find(".ekit-zoom-counter"),
                i = e.find(".ekit-zoom-wrapper").data("settings");
            if (!t.length) return !1;
            var n = t.data("date"),
                a = new Date(n).getTime();
            a || (a = 0);
            var s = setInterval((function() {
                var e = (new Date).getTime(),
                    n = a - e,
                    o = Math.floor(n / 864e5),
                    l = Math.floor(n % 864e5 / 36e5),
                    r = Math.floor(n % 36e5 / 6e4),
                    d = Math.floor(n % 6e4 / 1e3),
                    c = "<ul><li><span class='number'>" + o + "</span><span class='text'>" + i.days + "</span></li><li><span class='number'>" + l + "</span><span class='text'>" + i.hours + "</span></li><li><span class='number'>" + r + "</span><span class='text'>" + i.minutes + "</span></li><li><span class='number'>" + d + "</span><span class='text'>" + i.seconds + "</span></li></ul>";
                t.html(c), n < 0 && (clearInterval(s), t.html("EXPIRED"))
            }), 1e3)
        },
        Unfold: function(t) {
            var i = t.find(".ekit-unfold-btn"),
                n = t.find(".ekit-unfold-wrapper"),
                a = t.find(".ekit-unfold-data"),
                s = t.find(".ekit-unfold-data-inner"),
                o = n.data("config");
            o.collapse_height >= s.outerHeight() && (i.hide(), a.addClass("active")), i.on("click", (function() {
                var t = this,
                    i = e(this);
                t.style.display = "none", a.hasClass("active") ? (a.animate({
                    height: o.collapse_height
                }, parseInt(o.transition_duration, 10) || 0), i.html(o.expand_text)) : (a.animate({
                    height: s.outerHeight()
                }, parseInt(o.transition_duration, 10) || 0), i.html(o.collapse_text)), a.toggleClass("active"), a.hasClass("active") || setTimeout((() => {
                    a[0].scrollIntoView({
                        block: "center"
                    })
                }), [300]), setTimeout((function() {
                    t.style.display = "block"
                }), 300)
            }))
        },
        Woo_Product_slider: function(e) {
            let i = e.find(`.${t.config.swiperClass}`),
                n = i.data("autoplay"),
                a = i.data("loop"),
                s = i.data("speed"),
                o = i.data("space-between"),
                l = i.data("responsive-settings");
            var r = {
                navigation: {
                    nextEl: e.find(".ekit-navigation-next").get(0),
                    prevEl: e.find(".ekit-navigation-prev").get(0)
                },
                pagination: {
                    el: e.find(".ekit-swiper-pagination").get(0),
                    type: "bullets",
                    clickable: !0
                },
                autoplay: n && n,
                loop: a && Boolean(a),
                speed: s && Number(s),
                slidesPerView: Number(l.ekit_columns_mobile),
                spaceBetween: o && Number(o),
                breakpointsInverse: !0,
                breakpoints: {
                    640: {
                        slidesPerView: Number(l.ekit_columns_mobile),
                        spaceBetween: o && Number(o)
                    },
                    768: {
                        slidesPerView: Number(l.ekit_columns_tablet),
                        spaceBetween: o && Number(o)
                    },
                    1024: {
                        slidesPerView: Number(l.ekit_columns_desktop),
                        spaceBetween: o && Number(o)
                    }
                }
            };
            let d = e.find(`.${t.config.swiperClass}`);
            ElementsKit_Helper.swiper(d, r).then((function(e) {}))
        },
        Mini_Cart: function(t) {
            var i = t.find(".ekit-dropdown-back");
            i.on("click mouseenter mouseleave", (function(t) {
                var i = e(this),
                    n = i.hasClass("ekit-mini-cart-visibility-click"),
                    a = i.hasClass("ekit-mini-cart-visibility-hover"),
                    s = i.find(".ekit-mini-cart-container");
                "click" === t.type && n && !e(t.target).parents("div").hasClass("ekit-mini-cart-container") ? s.fadeToggle() : "mouseenter" === t.type && a ? s.fadeIn() : "mouseleave" === t.type && a && s.fadeOut()
            })), t.find(".ekit-mini-cart--backdrop, .ekit-dropdown-back > i, .ekit-dropdown-back > .ekit-basket-item-count").on("click", (function() {
                i.toggleClass("is--active")
            }))
        },
        Table: function(i) {
            var n = i.find(".ekit_table").data("settings");
            if (t.isEditMode() && (n = t.config.elements.data[i.data("model-cid")].attributes), i.find(".ekit_table").length > 0) {
                var a = i.find(".ekit_table").data("settings"),
                    s = "text" === a.nav_style.trim() || "both" === a.nav_style.trim() ? '<span class="ekit-tbl-pagi-nav ekit-tbl-pagi-prev">' + a.prev_text + "</span>" : "",
                    o = "text" === a.nav_style.trim() || "both" === a.nav_style.trim() ? '<span class="ekit-tbl-pagi-nav ekit-tbl-pagi-next">' + a.next_text + "</span>" : "",
                    l = "arrow" === a.nav_style.trim() || "both" === a.nav_style.trim() ? '<i class="ekit-tbl-pagi-nav-icon ekit-tbl-pagi-nav-prev-icon ' + a.prev_arrow + '" aria-hidden="true"></i>' : "",
                    r = "arrow" === a.nav_style.trim() || "both" === a.nav_style.trim() ? '<i class="ekit-tbl-pagi-nav-icon ekit-tbl-pagi-nav-next-icon ' + a.next_arrow + '" aria-hidden="true"></i>' : "";
                e(window).trigger("resize");
                var d = {
                    buttons: !0 === a.button ? ["copy", "excel", "csv"] : [],
                    bFilter: a.search,
                    autoFill: !0,
                    pageLength: a.item_per_page ? a.item_per_page : 1,
                    fixedHeader: a.fixedHeader,
                    responsive: a.responsive,
                    paging: a.pagination,
                    ordering: a.ordering,
                    info: a.info,
                    retrieve: !0,
                    language: {
                        search: `<span class="ekit-table-search-label">${a.searchIcon}</span>`,
                        searchPlaceholder: n.search_placeholder,
                        info: n.info_text,
                        infoEmpty: n.info_text ? n.info_text.replace(/_START_|_END_|_TOTAL_/gi, "0") : "",
                        lengthMenu: n.entries_text,
                        paginate: {
                            next: o + r,
                            previous: l + s
                        }
                    }
                };
                !1 === a.entries && (d.dom = "Bfrtip"), i.find(".ekit_table table").DataTable(d)
            }
        },
        TimeLine: function(t) {
            t.find(".elementskit-invisible").elementorWaypoint((function() {
                if (this.adapter.$element.hasClass("animated")) this.destroy();
                else {
                    var e = "animated " + this.adapter.$element.data("settings")._animation;
                    this.adapter.$element.removeClass("elementskit-invisible").addClass(e)
                }
            }), {
                offset: "bottom-in-view"
            }), t.on("mouseenter", ".horizantal-timeline > .single-timeline", (function() {
                e(this).addClass("hover").siblings().removeClass("hover")
            })).on("mouseleave", ".horizantal-timeline > .single-timeline", (function() {
                e(this).removeClass("hover")
            }))
        },
        Creative_Button: function(t) {
            var i = t.find(".ekit_position_aware_bg");
            t.on("mouseenter mouseleave", ".ekit_position_aware", (function(t) {
                var n = e(this).offset(),
                    a = t.pageX - n.left,
                    s = t.pageY - n.top;
                i.css({
                    top: s,
                    left: a
                })
            }))
        },
        Hotspot: function(t) {
            var i = t.find(".ekit-location-on-click > .ekit-location_indicator, .ekit-location-on-hover.click > .ekit-location_indicator"),
                n = t.find(".ekit-location-on-hover:not(.click) > .ekit-location_indicator"),
                a = t.find(".ekit-location");

            function s() {
                let t = e(this).find(".ekit-location_outer"),
                    i = e(this).find(".ekit-location_indicator"),
                    n = i.width() / 2 + e(this).find(".ekit-hotspot-vertical-line").height(),
                    a = i.width() + e(this).find(".ekit-hotspot-horizontal-line").height(),
                    s = i.width() + e(this).find(".ekit-hotspot-horizontal-line").width();
                if (t.length)
                    if (e(this).hasClass("ekit_hotspot_follow_line_top") ? t.css({
                            bottom: a,
                            top: "auto"
                        }) : e(this).hasClass("ekit_hotspot_follow_line_bottom") ? t.css({
                            top: a,
                            bottom: "auto"
                        }) : e(this).hasClass("ekit_hotspot_follow_line_right_top") || e(this).hasClass("ekit_hotspot_follow_line_left_top") ? t.css("bottom", n) : e(this).hasClass("ekit_hotspot_follow_line_right_bottom") || e(this).hasClass("ekit_hotspot_follow_line_left_bottom") ? t.css("top", n) : e(this).hasClass("ekit_hotspot_follow_line_right") ? (t.css("top", -(t.height() / 2 - i.width() / 2)), t.css("left", s)) : e(this).hasClass("ekit_hotspot_follow_line_left") && (t.css("top", -(t.height() / 2 - i.width() / 2)), t.css("right", s)), t.offset().left < 0) e(window).width() <= 480 && e(this).find(".ekit-location_outer").css({
                        "max-width": e(window).width(),
                        "min-width": e(window).width() - 40
                    }), e(this).find(".ekit-location_outer").css("margin-left", Math.abs(t.offset().left));
                    else if (t.offset().left > 0)
                    if (e(window).width() <= 480 && t.width() > e(window).width()) e(this).find(".ekit-location_outer").css({
                        "max-width": e(window).width(),
                        "min-width": e(window).width() - 40
                    }), e(this).find(".ekit-location_outer").css("left", -Math.abs(t.offset().left));
                    else if (t.offset().left + t.width() > e(window).width()) {
                    let i = Math.abs(t.offset().left + t.width() - e(window).width());
                    e(this).find(".ekit-location_outer").css("left", -i)
                }
            }
            e(window).load((function() {
                e(window).width() <= 480 && a.hasClass("hotspot-following-line-style") && e(window).width() <= 480 && (a.removeClass("ekit_hotspot_follow_line_top ekit_hotspot_follow_line_bottom ekit_hotspot_follow_line_right_top ekit_hotspot_follow_line_right_bottom ekit_hotspot_follow_line_left_bottom ekit_hotspot_follow_line_right ekit_hotspot_follow_line_left ekit_hotspot_follow_line_left_top"), a.removeClass("hotspot-following-line-style").addClass("hotspot-following-line-straight ekit_hotspot_follow_line_top")), t.find(".ekit-location_outer").each((function() {
                    e(this).offset().top < 0 && e(this).parents(".ekit-location-on-hover").addClass("bottom"), e(this).parent().hasClass("auto") && e(this).offset().top < 0 && e(this).parent().removeClass("ekit_hotspot_follow_line_top").addClass("ekit_hotspot_follow_line_bottom")
                })), setTimeout((function() {
                    a.each(s)
                }), 1e3)
            })), i.on("click", (function() {
                t.find(".ekit-all-activated").length || e(this).parent().siblings().removeClass("active"), e(this).parent().toggleClass("active").removeClass("ekit-all-activated")
            })), n.on("mouseenter", (function() {
                a.removeClass("active")
            }))
        },
        Vertical_Menu: function(t) {
            if (t.find(".ekit-vertical-main-menu-on-click").length > 0) {
                let i = t.find(".ekit-vertical-main-menu-on-click"),
                    n = t.find(".ekit-vertical-menu-tigger"),
                    a = e("body").data("elementor-device-mode");
                "tablet" !== a && "mobile" !== a || i.removeClass("vertical-menu-active"), n.on("click", (function(e) {
                    e.preventDefault(), i.toggleClass("vertical-menu-active")
                }))
            }
            if (t.find(".elementskit-megamenu-has").length > 0) {
                let i = t.find(".elementskit-megamenu-has"),
                    n = t.parents(".elementor-container"),
                    a = t.find(".ekit-vertical-main-menu-wraper");
                Math.floor(n.width() - a.width());
                i.on("mouseenter", (function() {
                    let t = e(this).data("vertical-menu"),
                        i = e(this).children(".elementskit-megamenu-panel");
                    t && t !== undefined ? "string" == typeof t ? /^[0-9]/.test(t) ? i.css({
                        width: t
                    }) : e(window).bind("resize", (function() {
                        e(document).width() > 1024 ? i.css({
                            width: Math.floor(n.width() - a.width() - 10) + "px"
                        }) : i.removeAttr("style")
                    })).trigger("resize") : i.css({
                        width: t + "px"
                    }) : e(window).bind("resize", (function() {
                        e(document).width() > 1024 ? i.css({
                            width: Math.floor(n.width() - a.width() - 10) + "px"
                        }) : i.removeAttr("style")
                    })).trigger("resize")
                })), i.trigger("mouseenter")
            }
            t.find(".megamenu-ajax-load").length > 0 && t.find(".ekit-vertical-main-menu-wraper").on("mouseenter", ".elementskit-megamenu-has", (function(t) {
                ElementsKit_Helper.megaMenuAjaxLoad(e(this))
            })), t.find(".megamenu-ajax-load").length > 0 && t.find(".ekit-vertical-main-menu-wraper").on("mouseenter", ".elementskit-megamenu-has", (function(t) {
                ElementsKit_Helper.megaMenuAjaxLoad(e(this))
            }))
        },
        Video_Gallery: function(i) {
            var n = i.find(".video-link.popup"),
                a = i.find(".video-link.inline"),
                s = (i.find(".ekit-video-gallery-wrapper.ekit-masonry"), i.find(".elementskit-main-filter>li>a")),
                o = i.find(".ekit-video-gallery.ekit-carousel"),
                l = o.data("config");
            if (n.length > 0 && n.magnificPopup({
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: !0,
                    fixedContentPos: !1,
                    iframe: {
                        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe></div>',
                        patterns: {
                            youtube: {
                                index: "youtube.com/",
                                id: "v=",
                                src: "https://www.youtube.com/embed/%id%?autoplay=1&rel=0"
                            }
                        }
                    }
                }), a.on("click", (function(t) {
                    t.preventDefault();
                    var i = e(this).data("url");
                    e(this).addClass("video-added").append('<iframe src="' + i + '" width="643" height="360" allow="autoplay" frameborder="0"></iframe>')
                })), s.on("click", (function(t) {
                    t.preventDefault();
                    var n = e(this).data("value") ? "." + e(this).data("value") : "";
                    i.find("a").removeClass("selected"), e(this).addClass("selected"), i.find(".ekit-video-item").hide(), i.find(".ekit-video-item" + n).fadeIn()
                })), o.length) {
                l.arrows && (l.navigation = {
                    prevEl: i.find(".swiper-button-prev").get(0),
                    nextEl: i.find(".swiper-button-next").get(0)
                }), l.dots && (l.pagination = {
                    el: i.find(".swiper-pagination").get(0),
                    type: "bullets",
                    clickable: !0
                });
                let e = i.find(`.${t.config.swiperClass}`);
                ElementsKit_Helper.swiper(e, l).then((function(t) {
                    l.autoplay && l.pauseOnMouseEnter && e.hover((function() {
                        t.autoplay.stop()
                    }), (function() {
                        t.autoplay.start()
                    }))
                }))
            }
            jQuery(".ekit-video-gallery.ekit-masonry").isotope({
                percentPosition: !0,
                itemSelector: ".ekit-video-item "
            })
        },
        Facebook_Feed: function(t) {
            t.find(".ekit-fb-video-play-button").on("click", (function() {
                let t = e(this).closest(".video-container"),
                    i = `\n\t\t\t\t\t<video controls autoplay>\n\t\t\t\t\t\t<source src="${t.data("src")}" type="video/mp4">\n\t\t\t\t\t\tYour browser does not support the video tag.\n\t\t\t\t\t</video>\n\t\t\t\t`;
                t.html(i)
            }))
        },
        Facebook_Review: function(e) {
            i.Social_Review_Slider(e.find(".ekit-review-slider-wrapper-facebook")), i.Handle_Review_More(e)
        },
        Yelp_Review: function(e) {
            i.Social_Review_Slider(e.find(".ekit-review-slider-wrapper-yelp")), i.Handle_Review_More(e)
        },
        BlogPosts: function(i) {
            var n = i.find(".ekit-blog-post-pagination-container"),
                a = i.data("id"),
                s = {
                    items: "#post-items--" + a,
                    nagivation: "#post-nagivation--" + a,
                    masonry: "#post-masonry--" + a
                };
            if (i.on("click", ".ekit-blog-post-pagination-container a.page-numbers", (function(t) {
                    t.preventDefault();
                    var a = e(this).attr("href");
                    e.ajax({
                        url: a
                    }).done((function(t) {
                        var a = e(t),
                            o = a.find(s.items).html(),
                            l = a.find(s.nagivation).html();
                        "loadmore" == n.data("ekit-blog-post-style") ? i.find(s.items).append(o) : i.find(s.items).html(o), i.find(s.nagivation).html(l), e(o).imagesLoaded((function() {
                            var t = e(s.items);
                            t.data("masonry") ? (t.masonry("reloadItems"), t.masonry("layout")) : t.masonry({
                                itemSelector: ".post-item",
                                columnWidth: ".post-item",
                                percentPosition: !0,
                                transitionDuration: 0
                            })
                        }))
                    }))
                })), "yes" === i.find(s.items).data("enable")) {
                let e = i.find(`.${t.config.swiperClass}`).data("settings");
                const n = {
                    spaceBetween: e.spaceBetween,
                    slidesPerView: e.slidesPerView,
                    slidesPerGroup: e.slidesPerGroup,
                    loop: !0,
                    speed: e.speed,
                    breakpoints: e.breakPoints
                };
                !0 === e.navigation && (n.navigation = {
                    nextEl: i.find(".ekit-blog-carousel-button-next").get(0),
                    prevEl: i.find(".ekit-blog-carousel-button-prev").get(0)
                }), !0 === e.pagination && (n.pagination = {
                    el: i.find(".ekit-blog-carousel-pagination").get(0),
                    clickable: !0
                }), !0 === e.autoplay && (n.autoplay = {
                    delay: e.autoplayDelay
                });
                let a = i.find(`.${t.config.swiperClass}`);
                ElementsKit_Helper.swiper(a, n).then((function(e) {}))
            }
        },
        Advanced_Slider: function(i) {
            let n = i.find(".ekit-slider-wrapper"),
                a = i.closest(".swiper-custom-nav"),
                s = i.find(".ekit-progress-bar"),
                o = i.find(".elementskit-advanced-slider").data("widget_settings");
            var l = {
                loop: "yes" == o.sliderOptions.loopEnable,
                speed: o.sliderOptions.speedTime ? o.sliderOptions.speedTime : 600,
                grabCursor: "yes" == o.sliderOptions.sliderGrapCursor,
                direction: o.sliderOptions.sliderDirectionType ? o.sliderOptions.sliderDirectionType : "horizontal",
                autoHeight: !0,
                effect: o.sliderOptions.sliderEffect ? o.sliderOptions.sliderEffect : "default",
                paginationClickable: !0,
                pagination: {
                    el: n.find(".swiper-pagination.ekit-swiper-pagination").get(0),
                    clickable: !0
                },
                on: {
                    init: function() {
                        c(this), d(this)
                    },
                    slideChange: function() {
                        var e;
                        e = this, s.removeClass("progress-bar-active"), e.update()
                    },
                    slideChangeTransitionEnd: function() {
                        var e;
                        c(this), e = this, s.addClass("progress-bar-active"), e.update()
                    },
                    activeIndexChange: function() {
                        d(this)
                    }
                },
                navigation: {
                    nextEl: a.length ? a.find(".ekit-double-btn-two") : i.find(".swiper-button-next").get(0),
                    prevEl: a.length ? a.find(".ekit-double-btn-one") : i.find(".swiper-button-prev").get(0)
                }
            };
            "horizontal" == o.sliderOptions.sliderDirectionType ? (l.slidesPerView = o.sliderOptions.slidesPerViewItem, l.spaceBetween = o.sliderOptions.spaceBetweenGap, l.breakpoints = o.sliderOptions.breakpointsOption) : l.slidesPerView = 1, "yes" != o.sliderOptions.sliderAutoPlay && "yes" != o.sliderOptions.progressBar || (l.autoplay = {
                delay: o.sliderOptions.autoPlayDelay ? o.sliderOptions.autoPlayDelay : 3e3,
                pauseOnMouseEnter: !0
            }, i.find(".ekit-slider-wrapper").hover((function() {
                this.swiper.autoplay.stop()
            }), (function() {
                this.swiper.autoplay.start()
            }))), "yes" == o.sliderOptions.sliderMouseScroll && (l.mousewheel = {
                invert: !0,
                sensitivity: 1,
                thresholdTime: 9
            });
            let r = i.find(`.${t.config.swiperClass}`);

            function d(t) {
                let i = t.activeIndex;
                e(t.slides[i]).find(".elementor-widget").each((function(t, i) {
                    let {
                        _animation: n,
                        _animation_delay: a
                    } = e(i).data("settings") || {};
                    n && (e(i).addClass("animated elementor-invisible").css({
                        "animation-name": "unset"
                    }), setTimeout((() => {
                        e(i).css({
                            "animation-name": n
                        }), e(i).removeClass("elementor-invisible")
                    }), a || 1200))
                })), t.update()
            }

            function c(t) {
                n.find(".ekit-swiper-slide").css({
                    height: "auto"
                });
                let i = t.activeIndex,
                    a = e(t.slides[i]).height();
                n.find(".ekit-swiper-wrapper, .ekit-swiper-slide").css({
                    height: a
                }), t.update()
            }
            if (ElementsKit_Helper.swiper(r, l).then((function(e) {})), "yes" == o.sliderOptions.progressBar && (i.find(".ekit-slider-wrapper, .ekit-swiper-progress").each((function(t, i) {
                    e(i).on("mouseenter", (function() {
                        s.css({
                            animationPlayState: "paused"
                        })
                    }))
                })), i.find(".ekit-slider-wrapper, .ekit-swiper-progress").each((function(t, i) {
                    e(i).on("mouseleave", (function() {
                        s.css({
                            animationPlayState: "running"
                        })
                    }))
                }))), "yes" === o.sliderOptions.sliderThumbsShow) {
                let {
                    sliderOptions: t
                } = o;
                setTimeout((() => {
                    let a = i.find(".swiper-pagination.ekit-swiper-pagination"),
                        s = a.children(),
                        o = t.sliderTabItems.map((e => e.ekit_slider_thumbs_image.url)),
                        l = s.length,
                        r = {
                            display: "grid"
                        };
                    s.each((function(t) {
                        const i = e(this);
                        i.css({
                            background: `url(${o[t]})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }), i.siblings().css({
                            width: "100%"
                        })
                    })), "horizontal" === t.sliderDirectionType ? (r.width = t.sliderThumbsOffset.size ? `${t.sliderThumbsOffset.size}%` : "70%", r.gridTemplateColumns = `repeat(${l}, 1fr)`, r.gridTemplateRows = "1fr", r.marginTop = "7px") : (r.gridTemplateColumns = "1fr", r.gridTemplateRows = `repeat(${l}, 1fr)`), a.css(r), n.addClass("slider-thumbs-yes")
                }), 200)
            }
        },
        Whatsapp: function(e) {
            const t = e.find(".elementskit-whatsapp__popup--btn"),
                i = e.find(".elementskit-whatsapp__input--field"),
                n = e.find(".elementskit-whatsapp__input--btn"),
                a = n.attr("href"),
                s = n.attr("target"),
                o = e.find(".elementskit-whatsapp__input--button"),
                l = e.find(".elementskit-whatsapp__content"),
                r = e.find(".elementskit-whatsapp__header--close"),
                d = e.find(".ekit-whatsapp-loader"),
                c = "elementskit-whatsapp__active",
                p = () => {
                    setTimeout((() => {
                        d.remove(), e.find(".elementskit-whatsapp__chat--title").fadeIn()
                    }), 3e3)
                },
                f = () => {
                    let e = i.val(),
                        t = a.replace(/text=/g, `text=${e}`);
                    n.attr("href", t)
                },
                u = ({
                    url: e,
                    title: t,
                    w: i,
                    h: n
                }) => {
                    const a = window.screenLeft !== undefined ? window.screenLeft : window.screenX,
                        s = window.screenTop !== undefined ? window.screenTop : window.screenY,
                        o = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                        l = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                        r = o / window.screen.availWidth,
                        d = (o - i) / 2 / r + a,
                        c = (l - n) / 2 / r + s;
                    window.open(e, t, `scrollbars=yes, width=${i/r}, height=${n/r}, top=${c}, left=${d}`)
                };
            "show" == l.data("show") && (l.addClass(c), d.length > 0 && p()), t.click((function() {
                l.toggleClass(c), d.length > 0 && p()
            })), r.click((function() {
                l.removeClass(c)
            })), n.on("click", (function() {
                f(), "popup" == s && u({
                    url: a,
                    title: "popup",
                    w: 700,
                    h: 600
                }), i.val("")
            })), i.keypress((function(e) {
                13 == e.which && (f(), "_self" == s ? window.location.assign(a) : "_blank" == s ? window.open(a) : u({
                    url: a,
                    title: "popup",
                    w: 700,
                    h: 600
                }), i.val(""))
            })), o.length > 0 && "popup" == o.attr("target") && o.on("click", (function() {
                u({
                    url: o.attr("href"),
                    title: "popup",
                    w: 700,
                    h: 600
                })
            }))
        },
        Fancy_Animated_Text: function(t) {
            let i = t.find(".ekit-fancy-text").data("animation-settings");
            if ("animated" === i.animationStyle) {
                let n = i.animationDelay,
                    a = i.loadingBar,
                    s = a - 3e3,
                    o = i.lettersDelay,
                    l = i.typeLettersDelay,
                    r = i.duration,
                    d = r + 800,
                    c = i.revealDuration,
                    p = i.revealAnimationDelay;

                function f() {
                    var i, o;
                    t.find(".ekit-fancy-text.letters").find("b").each((function() {
                        var t = e(this),
                            i = t.text().split(""),
                            n = t.hasClass("is-visible");
                        for (let e in i) " " == i[e] && (i[e] = "&nbsp;"), t.parents(".rotate-2").length > 0 && (i[e] = "<em>" + i[e] + "</em>"), i[e] = n ? '<i class="in">' + i[e] + "</i>" : "<i>" + i[e] + "</i>";
                        var a = i.join("");
                        t.html(a)
                    })), i = t.find(".ekit-fancy-text"), o = n, i.each((function() {
                        var t = e(this);
                        if (t.hasClass("bar-loading")) o = a, setTimeout((function() {
                            t.find(".ekit-fancy-text-lists").addClass("is-loading")
                        }), s);
                        else if (t.hasClass("clip")) {
                            var i = t.find(".ekit-fancy-text-lists"),
                                n = i.width() + 10;
                            i.css("width", n)
                        } else if (t.hasClass("rotate-1")) {
                            var l = t.find(".ekit-fancy-text-lists b"),
                                r = 0,
                                d = 0;
                            l.each((function() {
                                (d = e(this).width()) > r && (r = d)
                            })), t.find(".ekit-fancy-text-lists").css("min-width", r)
                        } else if (!t.hasClass("type")) {
                            var l = t.find(".ekit-fancy-text-lists b"),
                                r = 0,
                                d = 0;
                            l.each((function() {
                                (d = e(this).innerWidth()) > r && (r = d)
                            })), t.find(".ekit-fancy-text-lists").css("max-width", r)
                        }
                        setTimeout((function() {
                            u(t.find(".is-visible").eq(0))
                        }), o)
                    }))
                }

                function u(e) {
                    var t = g(e);
                    if (e.parents(".ekit-fancy-text").hasClass("type")) {
                        var i = e.parent(".ekit-fancy-text-lists");
                        i.addClass("selected").removeClass("waiting"), setTimeout((function() {
                            i.removeClass("selected"), e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                        }), r), setTimeout((function() {
                            h(t, l)
                        }), d)
                    } else if (e.parents(".ekit-fancy-text").hasClass("letters")) {
                        var p = e.children("i").length >= t.children("i").length;
                        v(e, t), m(e.find("i").eq(0), e, p, o), k(t.find("i").eq(0), t, p, o)
                    } else e.parents(".ekit-fancy-text").hasClass("clip") ? e.parents(".ekit-fancy-text-lists").animate({
                        width: "2px"
                    }, c, (function() {
                        v(e, t), h(t)
                    })) : e.parents(".ekit-fancy-text").hasClass("bar-loading") ? (e.parents(".ekit-fancy-text-lists").removeClass("is-loading"), v(e, t), setTimeout((function() {
                        u(t)
                    }), a), setTimeout((function() {
                        e.parents(".ekit-fancy-text-lists").addClass("is-loading")
                    }), s)) : (v(e, t), setTimeout((function() {
                        u(t)
                    }), n))
                }

                function h(e, t) {
                    e.parents(".ekit-fancy-text").hasClass("type") ? (k(e.find("i").eq(0), e, !1, t), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".ekit-fancy-text").hasClass("clip") && e.parents(".ekit-fancy-text-lists").animate({
                        width: e.outerWidth() + 0
                    }, c, (function() {
                        setTimeout((function() {
                            u(e)
                        }), p)
                    }))
                }

                function m(t, i, a, s) {
                    if (t.removeClass("in").addClass("out"), t.is(":last-child") ? a && setTimeout((function() {
                            u(g(i))
                        }), n) : setTimeout((function() {
                            m(t.next(), i, a, s)
                        }), s), t.is(":last-child") && e("html").hasClass("no-csstransitions")) {
                        var o = g(i);
                        v(i, o)
                    }
                }

                function k(e, t, i, a) {
                    e.addClass("in").removeClass("out"), e.is(":last-child") ? (t.parents(".ekit-fancy-text").hasClass("type") && setTimeout((function() {
                        t.parents(".ekit-fancy-text-lists").addClass("waiting")
                    }), 200), i || setTimeout((function() {
                        u(t)
                    }), n)) : setTimeout((function() {
                        k(e.next(), t, i, a)
                    }), a)
                }

                function g(e) {
                    return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
                }

                function v(e, t) {
                    e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible")
                }
                f()
            }
        },
        Price_Menu: function(e) {
            var i = e.find(`.${t.config.swiperClass}`).find(".swiper-wrapper").data("config");
            if (i != undefined) {
                i.pagination = {
                    el: e.find(".swiper-pagination").get(0),
                    clickable: !0
                }, i.navigation = {
                    nextEl: e.find(".ekit-price-card-slider-button-next").get(0),
                    prevEl: e.find(".ekit-price-card-slider-button-prev").get(0)
                };
                let n = e.find(`.${t.config.swiperClass}`);
                ElementsKit_Helper.swiper(n, i).then((function(e) {
                    i.autoplay && i.pauseOnHover && n.hover((function() {
                        e.autoplay.stop()
                    }), (function() {
                        e.autoplay.start()
                    }))
                }))
            }
        },
        Stylish_List: function(t) {
            t.find(".ekit-stylish-list-content-wrapper").each((function() {
                let t = e(this),
                    i = t.data("ekit-delay"),
                    n = t.parent().data("ekit-animation");
                i != undefined && setTimeout((() => {
                    t.addClass("animated " + n).css("opacity", 1)
                }), i)
            }))
        },
        Team_Slider: function(e) {
            var i = e.find(".ekit-team-popup"),
                n = e.find(`.${t.config.swiperClass}`).data("config");
            i.magnificPopup({
                type: "inline",
                fixedContentPos: !0,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !0,
                prependTo: e.find(".ekit-wid-con"),
                showCloseBtn: !1,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "my-mfp-slide-bottom ekit-promo-popup ekit-team-modal"
                    }
                }
            }), e.find(".ekit-team-modal-close").on("click", (function() {
                i.magnificPopup("close")
            })), n != undefined && (n.pagination = {
                el: e.find(".swiper-pagination").get(0),
                clickable: !0
            }, n.navigation = {
                nextEl: e.find(".ekit-team-slider-button-next").get(0),
                prevEl: e.find(".ekit-team-slider-button-prev").get(0)
            }, n.autoplay && n.pauseOnHover && e.find(`.${t.config.swiperClass}`).hover((function() {
                this.swiper.autoplay.stop()
            }), (function() {
                this.swiper.autoplay.start()
            })));
            let a = e.find(`.${t.config.swiperClass}`);
            ElementsKit_Helper.swiper(a, n).then((function(e) {}))
        },
        Audio_Player: function(e) {
            let t = e.find(".ekit-audio-player"),
                i = t.data("audio-settings");
            if (i && (e.find("audio").mediaelementplayer({
                    pluginPath: "https://cdnjs.com/libraries/mediaelement/",
                    shimScriptAccess: "always",
                    audioVolume: i.audioVolume,
                    features: i.features,
                    startVolume: i.startVolume,
                    hideVolumeOnTouchDevices: i.hideVolumeOnTouchDevices,
                    success: function(e, t, i) {
                        e.addEventListener("progress", (function(e) {})), e.addEventListener("play", (function(e) {}))
                    }
                }), "object" == typeof i.playerIcons)) {
                let e = t.find(".mejs-playpause-button button"),
                    n = t.find(".mejs-volume-button button");
                e.html(`\n\t\t\t\t\t\t<i aria-hidden="true" class="ekit-audio-play ${i.playerIcons.play}"></i>\n\t\t\t\t\t\t<i aria-hidden="true" class="ekit-audio-pause ${i.playerIcons.pause}"></i>\n\t\t\t\t\t\t<i aria-hidden="true" class="ekit-audio-replay ${i.playerIcons.replay}"></i>\n\t\t\t\t\t\t`), n.html(`\n\t\t\t\t\t\t<i aria-hidden="true" class="ekit-audio-unmute ${i.playerIcons.unmute}"></i>\n\t\t\t\t\t\t<i aria-hidden="true" class="ekit-audio-mute ${i.playerIcons.mute}"></i>\n\t\t\t\t\t\t`)
            }
        },
        Flip_box: function(t) {
            let i = t.find(".ekit-flip-box-front-button");
            e(i).on("click", (function() {
                t.find(".ekit-flip-box").addClass("on_active")
            })), t.find(".ekit-flip-box-back").on("click", (function() {
                t.find(".ekit-flip-box").removeClass("on_active")
            }));
            let n = t.find(".ekit-flip-box.box_click");
            e(n).on("click", (function() {
                e(this).toggleClass("active")
            }))
        },
        Image_Morphing: function(e) {
            let i, n, a, s = e.find(".ekit-morphing-wrapper").data("paths"),
                o = e.find(".ekit-morphing-wrapper").find("path")[0],
                l = e.data("settings");
            t.isEditMode() && (l = t.config.elements.data[e.data("model-cid")].attributes);
            const r = {
                targets: o,
                d: [{
                    value: s || []
                }],
                easing: l.ekit_morphing_effect ? l.ekit_morphing_effect : "easeOutQuad",
                direction: l.ekit_morphing_direction ? l.ekit_morphing_direction : "alternate",
                loop: "yes" == l.ekit_morphing_loop || 1,
                duration: l.ekit_morphing_duration ? l.ekit_morphing_duration : 2e3,
                delay: l.ekit_morphing_delay ? l.ekit_morphing_delay : 10,
                endDelay: l.ekit_morphing_end_delay ? l.ekit_morphing_end_delay : 10
            };
            anime(r), l.ekit_svg_path_position_scale != undefined && (i = l.ekit_svg_path_position_scale.size ? l.ekit_svg_path_position_scale.size : "1", n = l.ekit_svg_path_position_translate_x.size ? l.ekit_svg_path_position_translate_x.size + "px" : "100px", a = l.ekit_svg_path_position_translate_y.size ? l.ekit_svg_path_position_translate_y.size + "px" : "100px", e.find(".ekit-morphing-wrapper svg.ekit-custom-svg ").find("path").css({
                transform: `scale(${i}) translateX(${n}) translateY(${a})`
            }))
        },
        Image_Swap: function(t) {
            let i = t.find(".ekit-image-swap"),
                n = i.data("trigger");
            i.click((function() {
                e(this).toggleClass("click-active")
            })), "click-inactive" == n && i.click((function() {
                e(this).hasClass("click-inactive") ? e(this).removeClass("click-inactive").addClass("click-active") : e(this).addClass("click-inactive").removeClass("click-active")
            }))
        },
        Content_Ticker: function(i) {
            let n = i.find(".ekit-content-ticker-wrapper"),
                a = i.find(".ekitMarqueeSwiper"),
                s = n.data("content-settings"),
                o = s.settingOptions.tickerEffect;
            if ("marquee" !== o) {
                var l = {
                    loop: !0,
                    speed: s.settingOptions.tickerSpeed ? "typing" === o ? 100 : 1e3 * s.settingOptions.tickerSpeed : 1e3,
                    slidesPerView: "auto",
                    direction: s.settingOptions.tickerDirection ? s.settingOptions.tickerDirection : "horizontal",
                    effect: o ? "typing" === o ? "fade" : o : "slide",
                    fadeEffect: {
                        crossFade: !0
                    },
                    grabCursor: "yes" == s.settingOptions.tickerGrabCursor,
                    allowTouchMove: "yes" == s.settingOptions.tickerGrabCursor,
                    navigation: {
                        nextEl: i.find(".ekit-marquee-button-next").get(0),
                        prevEl: i.find(".ekit-marquee-button-prev").get(0)
                    },
                    on: {
                        init: function() {
                            r(this)
                        },
                        slideChangeTransitionEnd: function() {
                            r(this), d(this)
                        }
                    }
                };

                function r(e) {
                    if ("vertical" === s.settingOptions.tickerDirection) {
                        n.find(".ekit-marquee-item").css({
                            height: "auto"
                        });
                        let t = e.activeIndex,
                            i = e.slides[t].scrollHeight;
                        n.find(".ekit-marquee .swiper-wrapper, .ekit-marquee-item").css("height", `${i}px`), e.update()
                    }
                }

                function d(t) {
                    if ("typing" === o) {
                        let i = t.activeIndex,
                            n = e(t.slides[i]).find(".ekit-title-and-description a"),
                            a = n.text();
                        n.empty();
                        let o = 0;
                        ! function l() {
                            o < a.length && (n[0].innerHTML += a.charAt(o), o++, setTimeout(l, (s.settingOptions.tickerDelay - 3e3) / a.length))
                        }()
                    }
                }
                "yes" === s.settingOptions.tickerAutoPlay && (l.autoplay = {
                    delay: s.settingOptions.tickerDelay ? s.settingOptions.tickerDelay : 700,
                    reverseDirection: "yes" === s.settingOptions.tickerReverseDirection,
                    disableOnInteraction: !1
                }, a.hover((function() {
                    this.swiper.autoplay.stop(), a.find(".swiper-wrapper").css({
                        "animation-play-state": "paused"
                    })
                }), (function() {
                    this.swiper.autoplay.start(), a.find(".swiper-wrapper").css({
                        "animation-play-state": "running"
                    })
                })));
                let c = i.find(`.${t.config.swiperClass}`);
                ElementsKit_Helper.swiper(c, l).then((function(e) {}))
            }
            if ("marquee" === o) {
                let p = i.find(".ticker"),
                    f = i.find(".marquee-wrapper"),
                    u = f.clone(!0);
                "yes" === s.settingOptions.tickerReverseDirection ? p.addClass("ticker-right") : p.addClass("ticker-left"), p.css({
                    "padding-left": "100%"
                }), f.css({
                    "padding-right": "100%"
                }), "yes" !== s.settingOptions.tickerGapBetween && (p.append(u), "yes" === s.settingOptions.tickerReverseDirection ? p.addClass("ticker-right-loop") : p.addClass("ticker-left-loop"), p.css({
                    "padding-left": "unset",
                    display: "flex"
                }), f.css({
                    "padding-right": "unset"
                }))
            }
        },
        Coupon_Code: function(t) {
            var i = t.find(".ekit-coupon-popup"),
                n = t.find(".ekit-coupon-wrapper"),
                a = t.find(".ekit-coupon-outer"),
                s = t.find(".ekit_coupon_btn_group");
            let o;
            i.magnificPopup({
                type: "inline",
                fixedContentPos: !0,
                fixedBgPos: !0,
                overflowY: "auto",
                closeBtnInside: !0,
                prependTo: t.find(".ekit-wid-con"),
                showCloseBtn: !1,
                callbacks: {
                    beforeOpen: function() {
                        this.st.mainClass = "my-mfp-slide-bottom ekit-promo-popup ekit-coupon-popup ekit-coupon-modal"
                    }
                }
            }), t.find(".ekit-coupon-modal-close").on("click", (function() {
                i.magnificPopup("close")
            })), e(n).on("click", (function() {
                var t = e(this).find("#btn_copy_code"),
                    i = e(this).find("#copy_code"),
                    n = e(this).data("popup-select");
                e(i).removeClass("slide-hide"), "click" == n && e(t).addClass("slide-hide")
            })), t.find(".ekit_copy_btn_text").on("click", (function(t) {
                e(this).addClass("active"), e(this).next(".ekit_after_copied_text").addClass("active"), o && clearTimeout(o), o = setTimeout((() => {
                    e(this).removeClass("active"), e(this).next(".ekit_after_copied_text").removeClass("active")
                }), 2e3)
            })), t.find(".ekit_coupon_copybtn").on("click", (function(i) {
                let n = t.find(".ekit_coupon_copy_code").data("coupon-text"),
                    a = t.find(".ekit_copybtn_text").text();
                e(this).find(".ekit_coupon_btn_group_wrap .ekit_copybtn_text").text(`${n}`), o && clearTimeout(o), o = setTimeout((() => {
                    e(this).find(".ekit_coupon_btn_group_wrap .ekit_copybtn_text").text(`${a}`)
                }), 2e3)
            })), e(n).on("click", (function() {
                var t = e(this).find(".ekit_coupon_code").data("coupon");
                navigator.clipboard.writeText(t)
            })), e(a).on("click", (function() {
                var t = e(this).find(".ekit_modal_code").data("coupon");
                navigator.clipboard.writeText(t)
            })), e(s).on("click", (function() {
                var t = e(this).find(".ekit_coupon_copy_code").data("coupon");
                navigator.clipboard.writeText(t)
            }));
            const l = document.querySelectorAll(".click-to-copy__text"),
                r = document.querySelectorAll(".copy_success");
            l.length && r.length && l.forEach(((e, t) => {
                const i = r[t];
                e.addEventListener("click", (() => {
                    navigator.clipboard.writeText(e.textContent), e.classList.add("hide"), i.classList.remove("hide"), setTimeout((() => {
                        e.classList.remove("hide"), i.classList.add("hide")
                    }), 1500)
                }))
            }))
        },
        Comparison_Table: function(t) {
            t.find("#buttonId").click((function() {
                var i = t.find(".ekit-comparison-table-body a, .ekit-comparison-table-body li"),
                    n = {};
                i.each((function() {
                    var t = e(this).text();
                    n[t] ? n[t].push(this) : n[t] = [this]
                }));
                var a = !1;
                e.each(n, (function(e, t) {
                    if (t.length > 1) return a = !0, !1
                })), a && e.each(n, (function(t, i) {
                    i.length > 1 && e(i).toggleClass("blurred")
                }))
            }))
        },
        Interactive_Links: function(t) {
            let i = t.find(".ekit-interactive-links-list-link"),
                n = t.find(".ekit-interactive-links-image");
            i.eq(0).addClass("ekit-interactive-active"), n.eq(0).addClass("ekit-interactive-active ekit-interactive-special"), i.mouseenter((function() {
                e(this).hasClass("ekit-interactive-active") || (e(this).addClass("ekit-interactive-active").siblings().removeClass("ekit-interactive-active"), n.removeClass("ekit-interactive-active").eq(e(this).index()).addClass("ekit-interactive-active"), n.removeClass("ekit-interactive-next").eq(e(this).index()).next().addClass("ekit-interactive-next"), n.removeClass("ekit-interactive-prev").eq(e(this).index()).prev().addClass("ekit-interactive-prev"), t.find(".ekit-interactive-special").addClass("ekit-interactive-prev"))
            })), i.mouseout((function() {
                n.removeClass("ekit-interactive-special").eq(e(this).index()).addClass("ekit-interactive-special")
            }))
        }
    };
    e(window).on("elementor/frontend/init", i.init)
}(jQuery, window.elementorFrontend)