"use strict";
var Layout = function() {
        function e(e) {
            $(".sidenav-toggler").addClass("active"), $(".sidenav-toggler").data("action", "sidenav-unpin"), $("body").removeClass("g-sidenav-hidden").addClass("g-sidenav-show g-sidenav-pinned"), $("body").append('<div class="mask-body mask-body-light d-xl-none" data-action="sidenav-unpin" data-target=' + $("#sidenav-main").data("target") + " />"), localStorage.setItem("sidenav-state", "pinned")
        }

        function t(e) {
            $(".sidenav-toggler").removeClass("active"), $(".sidenav-toggler").data("action", "sidenav-pin"), $("body").removeClass("g-sidenav-pinned").addClass("g-sidenav-hidden"), $("body").find(".mask-body").remove(), localStorage.setItem("sidenav-state", "unpinned")
        }
        var a = localStorage.getItem("sidenav-state") ? localStorage.getItem("sidenav-state") : "pinned";
        if ($(window).width() > 1200 && ("pinned" == a && e($("#sidenav-toggler")), "unpinned" == localStorage.getItem("sidenav-state") && t($("#sidenav-main"))), $("body").on("click", "[data-action]", function(a) {
                a.preventDefault();
                var n = $(this),
                    o = n.data("action"),
                    i = n.data("target");
                switch (o) {
                    case "offcanvas-open":
                        i = n.data("target"), $(i).addClass("open"), $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + i + " />");
                        break;
                    case "offcanvas-close":
                        i = n.data("target"), $(i).removeClass("open"), $("body").find(".body-backdrop").remove();
                        break;
                    case "aside-open":
                        i = n.data("target"), n.addClass("active"), $(i).addClass("show"), $("body").append('<div class="mask-body mask-body-light" data-action="aside-close" data-target=' + i + " />");
                        break;
                    case "aside-close":
                        i = n.data("target"), n.removeClass("active"), $(i).removeClass("show"), $("body").find(".body-backdrop").remove();
                        break;
                    case "omnisearch-open":
                        i = n.data("target"), n.addClass("active"), $(i).addClass("show"), $(i).find(".form-control").focus(), $("body").addClass("omnisearch-open").append('<div class="mask-body mask-body-dark" data-action="omnisearch-close" data-target="' + i + '" />');
                        break;
                    case "omnisearch-close":
                        i = n.data("target"), $('[data-action="search-open"]').removeClass("active"), $(i).removeClass("show"), $("body").removeClass("omnisearch-open").find(".mask-body").remove();
                        break;
                    case "search-open":
                        i = n.data("target"), n.addClass("active"), $(i).addClass("show"), $(i).find(".form-control").focus();
                        break;
                    case "search-close":
                        i = n.data("target"), $('[data-action="search-open"]').removeClass("active"), $(i).removeClass("show");
                        break;
                    case "sidenav-pin":
                        e();
                        break;
                    case "sidenav-unpin":
                        t()
                }
            }), $(".sidenav").on("mouseenter", function() {
                $("body").hasClass("g-sidenav-pinned") || $("body").removeClass("g-sidenav-hide").removeClass("g-sidenav-hidden").addClass("g-sidenav-show")
            }), $(".sidenav").on("mouseleave", function() {
                $("body").hasClass("g-sidenav-pinned") || ($("body").removeClass("g-sidenav-show").addClass("g-sidenav-hide"), setTimeout(function() {
                    $("body").removeClass("g-sidenav-hide").addClass("g-sidenav-hidden")
                }, 300))
            }), $("[data-offset-top]").length) {
            var n = $("[data-offset-top]"),
                o = $(n.data("offset-top")).height();
            n.css({
                "padding-top": o + "px"
            })
        }
    }(),
    Popover = function() {
        var e = $('[data-toggle="popover"]');
        e.length && e.each(function() {
            ! function(e) {
                var t = "";
                e.data("color") && (t = " popover-" + e.data("color"));
                var a = {
                    trigger: "focus",
                    template: '<div class="popover' + t + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                };
                e.popover(a)
            }($(this))
        })
    }(),
    Tooltip = function() {
        var e = $('[data-toggle="tooltip"]');
        e.length && e.tooltip()
    }(),
    BgImgHolder = function() {
        var e = $(".bg-img-holder");
        e.length && e.each(function() {
            var e, t, a, n, o;
            t = (e = $(this)).children("img").attr("src"), a = e.data("bg-position") ? e.data("bg-position") : "initial", n = e.data("bg-size") ? e.data("bg-size") : "auto", o = e.data("bg-height") ? e.data("bg-height") : "100%", e.css("background-image", 'url("' + t + '")').css("background-position", a).css("background-size", n).css("opacity", "1").css("height", o)
        })
    }(),
    CardActions = function() {
        var e = $(".card"),
            t = ".card-product-actions";
        e.length && $(t).length && (e.on({
            mouseenter: function() {
                var e, a, n;
                e = $(this), a = e.find(t), n = a.data("animation-in"), a.length && (a.addClass("in animated " + n), a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    a.removeClass("animated " + n)
                }))
            }
        }), e.on({
            mouseleave: function() {
                var e, a, n;
                e = $(this), a = e.find(t), n = a.data("animation-out"), a.length && (a.addClass("animated " + n), a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    a.removeClass("in animated " + n)
                }))
            }
        }))
    }(),
    Dropdown = function() {
        var e = $(".dropdown-animate"),
            t = $('.dropdown-submenu [data-toggle="dropdown"]');
        e.length && e.on({
            "hide.bs.dropdown": function() {}
        }), t.length && t.on("click", function(e) {
            return function(e) {
                e.next().hasClass("show") || e.parents(".dropdown-menu").first().find(".show").removeClass("show");
                var t = e.next(".dropdown-menu");
                t.toggleClass("show"), t.parent().toggleClass("show"), e.parents(".nav-item.dropdown.show").on("hidden.bs.dropdown", function(e) {
                    $(".dropdown-submenu .show").removeClass("show")
                })
            }($(this)), !1
        })
    }(),
    FormControl = function() {
        var e = $(".form-control"),
            t = $('[data-toggle="indeterminate"]');
        e.length && e.on("focus blur", function(e) {
            $(this).parents(".form-group").toggleClass("focused", "focus" === e.type || this.value.length > 0)
        }).trigger("blur"), t.length && t.each(function() {
            $(this).prop("indeterminate", !0)
        })
    }(),
    CustomInputFile = function() {
        var e = $(".custom-input-file");
        e.length && e.each(function() {
            var e = $(this);
            e.on("change", function(t) {
                ! function(e, t, a) {
                    var n, o = e.next("label"),
                        i = o.html();
                    t && t.files.length > 1 ? n = (t.getAttribute("data-multiple-caption") || "").replace("{count}", t.files.length) : a.target.value && (n = a.target.value.split("\\").pop()), n ? o.find("span").html(n) : o.html(i)
                }(e, this, t)
            }), e.on("focus", function() {
                ! function(e) {
                    e.addClass("has-focus")
                }(e)
            }).on("blur", function() {
                ! function(e) {
                    e.removeClass("has-focus")
                }(e)
            })
        })
    }(),
    NavbarCollapse = function() {
        var e = $("#navbar-main"),
            t = $("#navbar-main-collapse"),
            a = $("#navbar-top-main");
        t.length && (t.on({
            "show.bs.collapse": function() {
                e.addClass("navbar-collapsed"), a.addClass("navbar-collapsed"), $("#header-main").addClass("header-collapse-show")
            }
        }), t.on({
            "hide.bs.collapse": function() {
                t.removeClass("collapsing").addClass("collapsing-out"), e.removeClass("navbar-collapsed").addClass("navbar-collapsed-out"), a.removeClass("navbar-collapsed").addClass("navbar-collapsed-out")
            }
        }), t.on({
            "hidden.bs.collapse": function() {
                t.removeClass("collapsing-out"), e.removeClass("navbar-collapsed-out"), a.removeClass("navbar-collapsed-out"), $("#header-main").removeClass("header-collapse-show")
            }
        }))
    }(),
    NavbarSticky = function() {
        var e = $(".navbar-sticky");

        function t(e) {
            $(window).scrollTop() > a + 200 ? e.addClass("sticky") : e.removeClass("sticky")
        }
        if (e.length) {
            var a = e.offset().top;
            t(e), $(window).on({
                scroll: function() {
                    t(e)
                }
            })
        }
    }(),
    NegativeMargin = function() {
        var e = $("[data-negative-margin]");
        $(window).on({
            "load resize": function() {
                e.length && e.each(function() {
                    var e, t;
                    t = (e = $(this)).find($(e.data("negative-margin"))).height(), console.log(t), $(window).width() > 991 ? e.css({
                        "margin-top": "-" + t + "px"
                    }) : e.css({
                        "margin-top": "0"
                    })
                })
            }
        })
    }(),
    Pricing = function() {
        var e = $(".pricing-container"),
            t = $(".pricing-container button[data-pricing]");
        e.length && t.on({
            click: function() {
                ! function(e) {
                    e.data("pricing");
                    var t = e.parents(".pricing-container"),
                        a = $("." + t.attr("class") + " [data-pricing-value]");
                    e.hasClass("active") || ($("." + t.attr("class") + " button[data-pricing]").removeClass("active"), e.addClass("active"), a.each(function() {
                        var e = $(this).data("pricing-value"),
                            t = $(this).find("span.price").text();
                        $(this).find("span.price").text(e), $(this).data("pricing-value", t)
                    }))
                }($(this))
            }
        })
    }(),
    ScrollTo = function() {
        var e = $(".scroll-me, [data-scroll-to], .toc-entry a"),
            t = window.location.hash;
        e.length && e.on("click", function(e) {
            ! function(e) {
                var t = e.attr("href"),
                    a = e.data("scroll-to-offset") ? e.data("scroll-to-offset") : 0,
                    n = {
                        scrollTop: $(t).offset().top - a
                    };
                $("html, body").stop(!0, !0).animate(n, 600), event.preventDefault()
            }($(this))
        }), $(window).on("load", function() {
            var e;
            t && "#!" != t && $(t).length && (e = t, $("html, body").animate({
                scrollTop: $(e).offset().top
            }, "slow"))
        })
    }(),
    Shape = function() {
        var e = $(".shape-container");
        $(window).on({
            "load resize": function() {
                e.length && e.each(function() {
                    var e, t;
                    t = (e = $(this)).find("svg").height(), e.css({
                        height: t + "px"
                    })
                })
            }
        })
    }(),
    Spotlight = function() {
        var e = $("[data-spotlight]");
        $(window).on({
            "load resize": function() {
                e.length && e.each(function() {
                    ! function(e) {
                        var t;
                        if ("fullscreen" == e.data("spotlight")) {
                            if (e.data("spotlight-offset")) {
                                var a = $("body").find(e.data("spotlight-offset")).height();
                                t = $(window).height() - a
                            } else t = $(window).height();
                            $(window).width() > 991 ? e.find(".spotlight-holder").css({
                                height: t + "px"
                            }) : e.find(".spotlight-holder").css({
                                height: "auto"
                            })
                        }
                        e.imagesLoaded().done(function(t) {
                            e.find(".animated").each(function() {
                                var e = $(this);
                                if (!e.hasClass("animation-ended")) {
                                    var t = e.data("animation-in"),
                                        a = (e.data("animation-out"), e.data("animation-delay"));
                                    setTimeout(function() {
                                        e.addClass("animation-ended " + t, 100).on("webkitAnimationEnd animationend", function() {
                                            e.removeClass(t)
                                        })
                                    }, a)
                                }
                            })
                        })
                    }($(this))
                })
            }
        })
    }(),
    GoogleMapCustom = function() {
        var e, t, a, n = document.getElementById("map-custom");
        void 0 !== n && null != n && google.maps.event.addDomListener(window, "load", function(n) {
            e = n.getAttribute("data-lat"), t = n.getAttribute("data-lng"), a = n.getAttribute("data-color");
            var o = new google.maps.LatLng(e, t),
                i = {
                    zoom: 12,
                    scrollwheel: !1,
                    center: o,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [{
                        featureType: "administrative",
                        elementType: "labels.text.fill",
                        stylers: [{
                            color: "#444444"
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [{
                            color: "#f2f2f2"
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "road",
                        elementType: "all",
                        stylers: [{
                            saturation: -100
                        }, {
                            lightness: 45
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [{
                            visibility: "simplified"
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "water",
                        elementType: "all",
                        stylers: [{
                            color: a
                        }, {
                            visibility: "on"
                        }]
                    }]
                };
            n = new google.maps.Map(n, i);
            var s = new google.maps.Marker({
                    position: o,
                    map: n,
                    animation: google.maps.Animation.DROP,
                    title: "Hello World!"
                }),
                r = new google.maps.InfoWindow({
                    content: '<div class="info-window-content"><h2>{{ site.product.name }} {{ site.product.name_long }}</h2><p>{{ site.product.description }}</p></div>'
                });
            google.maps.event.addListener(s, "click", function() {
                r.open(n, s)
            })
        }(n))
    }(),
    GoogleMap = function() {
        var e, t, a = document.getElementById("map-default");
        void 0 !== a && null != a && google.maps.event.addDomListener(window, "load", function(a) {
            e = a.getAttribute("data-lat"), t = a.getAttribute("data-lng");
            var n = new google.maps.LatLng(e, t),
                o = {
                    zoom: 12,
                    scrollwheel: !1,
                    center: n,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            a = new google.maps.Map(a, o);
            var i = new google.maps.Marker({
                    position: n,
                    map: a,
                    animation: google.maps.Animation.DROP,
                    title: "Hello World!"
                }),
                s = new google.maps.InfoWindow({
                    content: '<div class="info-window-content"><h2>{{ site.product.name }} {{ site.product.name_long }}</h2><p>{{ site.product.description }}</p></div>'
                });
            google.maps.event.addListener(i, "click", function() {
                s.open(a, i)
            })
        }(a))
    }(),
    TextareaAutosize = function() {
        var e = $('[data-toggle="autosize"]');
        e.length && autosize(e)
    }(),
    Countdown = function() {
        var e = $(".countdown");
        e.length && e.each(function() {
            var e, t;
            t = (e = $(this)).data("countdown-date"), e.countdown(t).on("update.countdown", function(e) {
                $(this).html(e.strftime('<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!D</span></div><div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hours</span></div><div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">minutes</span></div><div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">seconds</span></div>'))
            })
        })
    }();
! function(e) {
    e.fn.countTo = function(t) {
        return t = t || {}, e(this).each(function() {
            var a = e.extend({}, e.fn.countTo.defaults, {
                    from: e(this).data("from"),
                    to: e(this).data("to"),
                    speed: e(this).data("speed"),
                    refreshInterval: e(this).data("refresh-interval"),
                    decimals: e(this).data("decimals")
                }, t),
                n = Math.ceil(a.speed / a.refreshInterval),
                o = (a.to - a.from) / n,
                i = this,
                s = e(this),
                r = 0,
                l = a.from,
                d = s.data("countTo") || {};

            function c(e) {
                var t = a.formatter.call(i, e, a);
                s.text(t)
            }
            s.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(function() {
                r++, c(l += o), "function" == typeof a.onUpdate && a.onUpdate.call(i, l), r >= n && (s.removeData("countTo"), clearInterval(d.interval), l = a.to, "function" == typeof a.onComplete && a.onComplete.call(i, l))
            }, a.refreshInterval), c(l)
        })
    }, e.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function(e, t) {
            return e.toFixed(t.decimals)
        },
        onUpdate: null,
        onComplete: null
    }
}(jQuery);
var Counter = function() {
        var e, t = ".counter",
            a = $(t);
        a.length && (e = a, inView(t).on("enter", function() {
            e.hasClass("counting-finished") || e.countTo({
                formatter: function(e, t) {
                    return e.toFixed(t.decimals)
                },
                onUpdate: function(e) {},
                onComplete: function(e) {
                    $(this).addClass("counting-finished")
                }
            })
        }))
    }(),
    Datepicker = function() {
        var e = $('[data-toggle="date"]'),
            t = $('[data-toggle="datetime"]'),
            a = $('[data-toggle="time"]');
        e.length && e.each(function() {
            $(this).flatpickr({
                enableTime: !1,
                allowInput: !0
            })
        }), t.length && t.each(function() {
            $(this).flatpickr({
                enableTime: !0,
                allowInput: !0
            })
        }), a.length && a.each(function() {
            $(this).flatpickr({
                noCalendar: !0,
                enableTime: !0,
                allowInput: !0
            })
        })
    }(),
    Dropzones = function() {
        var e = $('[data-toggle="dropzone"]'),
            t = $(".dz-preview");
        e.length && (Dropzone.autoDiscover = !1, e.each(function() {
            var e, a, n, o, i;
            e = $(this), a = void 0 !== e.data("dropzone-multiple"), n = e.find(t), o = void 0, i = {
                url: e.data("dropzone-url"),
                thumbnailWidth: null,
                thumbnailHeight: null,
                previewsContainer: n.get(0),
                previewTemplate: n.html(),
                maxFiles: a ? null : 1,
                acceptedFiles: a ? null : "image/*",
                init: function() {
                    this.on("addedfile", function(e) {
                        !a && o && this.removeFile(o), o = e
                    })
                }
            }, n.html(""), e.dropzone(i)
        }))
    }(),
    Highlight = void $(".highlight").each(function(e, t) {
        ! function(e, t) {
            $(t).before('<button class="action-item btn-clipboard" title="Copy to clipboard"><i class="far fa-copy mr-2"></i>Copy</button>'), $(".btn-clipboard").tooltip().on("mouseleave", function() {
                $(this).tooltip("hide")
            });
            var a = new ClipboardJS(".btn-clipboard", {
                target: function(e) {
                    return e.nextElementSibling
                }
            });
            a.on("success", function(e) {
                $(e.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle"), e.clearSelection()
            }), a.on("error", function(e) {
                var t = "Press " + (/Mac/i.test(navigator.userAgent) ? "⌘" : "Ctrl-") + "C to copy";
                $(e.trigger).attr("title", t).tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle")
            }), hljs.highlightBlock(t)
        }(0, t)
    }),
    SortList = function() {
        var e = $('[data-toggle="list"]'),
            t = $("[data-sort]");
        e.length && e.each(function() {
            var e;
            e = $(this), new List(e.get(0), function(e) {
                return {
                    valueNames: e.data("list-values"),
                    listClass: e.data("list-class") ? e.data("list-class") : "list"
                }
            }(e))
        }), t.on("click", function() {
            return !1
        })
    }(),
    Masonry = function() {
        var e = $(".masonry-container");
        e.length && e.each(function() {
            var e, t, a, n, o, i;
            t = (e = $(this)).find(".masonry"), a = e.find(".masonry-filter-menu"), n = a.find(".active"), o = n.data("filter"), i = t.imagesLoaded(function() {
                null != o && "" != o && ("*" != o && (o = "." + o), n.addClass("active"));
                var e = {
                    itemSelector: ".masonry-item",
                    filter: o
                };
                i.isotope(e)
            }), a.on("click", "a", function(e) {
                e.preventDefault();
                var t = $(this),
                    n = $(this).attr("data-filter");
                n = "*" == n ? "" : "." + n, i.isotope({
                    filter: n
                }).on("arrangeComplete", function() {
                    a.find("[data-filter]").removeClass("active"), t.addClass("active")
                })
            })
        })
    }(),
    Notify = function() {
        var e = $('[data-toggle="notify"]');
        e.length && e.on("click", function(e) {
            e.preventDefault(),
                function(e, t, a, n, o, i) {
                    $.notify({
                        icon: a,
                        title: " Bootstrap Notify",
                        message: "Turning standard Bootstrap alerts into awesome notifications",
                        url: ""
                    }, {
                        element: "body",
                        type: n,
                        allow_dismiss: !0,
                        placement: {
                            from: e,
                            align: t
                        },
                        offset: {
                            x: 15,
                            y: 15
                        },
                        spacing: 10,
                        z_index: 1080,
                        delay: 2500,
                        timer: 25e3,
                        url_target: "_blank",
                        mouse_over: !1,
                        animate: {
                            enter: o,
                            exit: i
                        },
                        template: '<div class="alert alert-{0} alert-icon alert-group alert-notify" data-notify="container" role="alert"><div class="alert-group-prepend align-self-start"><span class="alert-group-icon"><i data-notify="icon"></i></span></div><div class="alert-content"><strong data-notify="title">{1}</strong><div data-notify="message">{2}</div></div><button type="button" class="close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
                    })
                }($(this).attr("data-placement"), $(this).attr("data-align"), $(this).attr("data-icon"), $(this).attr("data-type"), $(this).attr("data-animation-in"), $(this).attr("data-animation-out"))
        })
    }(),
    SingleSlider = function() {
        var e = $(".input-slider-container");
        e.length && e.each(function() {
            var e, t, a, n, o, i, s, r, l, d, c;
            a = (t = (e = $(this)).find(".input-slider")).attr("id"), n = t.data("range-value-min"), o = t.data("range-value-max"), s = (i = e.find(".range-slider-value")).attr("id"), r = i.data("range-value-low"), l = document.getElementById(a), d = document.getElementById(s), c = {
                start: [parseInt(r)],
                connect: [!0, !1],
                range: {
                    min: [parseInt(n)],
                    max: [parseInt(o)]
                }
            }, noUiSlider.create(l, c), l.noUiSlider.on("update", function(e, t) {
                d.textContent = e[t]
            })
        })
    }(),
    RangeSlider = function() {
        var e = $("#input-slider-range");
        e.length && e.each(function() {
            var e, t, a, n;
            $(this), e = document.getElementById("input-slider-range"), t = document.getElementById("input-slider-range-value-low"), a = document.getElementById("input-slider-range-value-high"), n = [t, a], noUiSlider.create(e, {
                start: [parseInt(t.getAttribute("data-range-value-low")), parseInt(a.getAttribute("data-range-value-high"))],
                connect: !0,
                range: {
                    min: parseInt(e.getAttribute("data-range-value-min")),
                    max: parseInt(e.getAttribute("data-range-value-max"))
                }
            }), e.noUiSlider.on("update", function(e, t) {
                n[t].textContent = e[t]
            })
        })
    }(),
    QuillEditor = (Popover = function() {
        var e = $('[data-toggle="popover"]'),
            t = "";
        e.length && e.each(function() {
            ! function(e) {
                e.data("color") && (t = "popover-" + e.data("color"));
                var a = {
                    template: '<div class="popover ' + t + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                };
                e.popover(a)
            }($(this))
        })
    }(), function() {
        var e = $('[data-toggle="quill"]');
        e.length && e.each(function() {
            var e, t;
            t = (e = $(this)).data("quill-placeholder"), new Quill(e.get(0), {
                modules: {
                    toolbar: [
                        ["bold", "italic"],
                        ["link", "blockquote", "code", "image"],
                        [{
                            list: "ordered"
                        }, {
                            list: "bullet"
                        }]
                    ]
                },
                placeholder: t,
                theme: "snow"
            })
        })
    }()),
    Scrollbar = function() {
        var e = $(".scrollbar-inner");
        e.length && e.scrollbar().scrollLock()
    }(),
    Select = function() {
        var e = $('[data-toggle="select"]');
        e.length && e.each(function() {
            $(this).select2({})
        })
    }(),
    Sticky = function() {
        var e = $('[data-toggle="sticky"]');
        $(window).on("load resize", function() {
            e.length && e.each(function() {
                var e, t;
                t = {
                    offset_top: (e = $(this)).data("sticky-offset") ? e.data("sticky-offset") : 0
                }, $(window).width() > 1e3 ? e.stick_in_parent(t) : e.trigger("sticky_kit:detach")
            })
        })
    }(),
    SvgInjector = function() {
        var e = document.querySelectorAll("img.svg-inject");
        e.length && SVGInjector(e)
    }(),
    WpxSwiper = function() {
        var e = $(".swiper-js-container");
        $(document).ready(function() {
            e.length && e.each(function(e, t) {
                var a, n, o, i, s, r, l, d, c, p, u, h, f, g, m, v, w, b, y, C, k, x;
                n = (a = $(t)).find(".swiper-container"), o = a.find(".swiper-pagination"), i = a.find(".swiper-button-next"), s = a.find(".swiper-button-prev"), r = n.data("swiper-effect") ? n.data("swiper-effect") : "slide", l = n.data("swiper-direction") ? n.data("swiper-direction") : "horizontal", d = n.data("swiper-initial-slide") ? n.data("swiper-initial-slide") : 0, c = !!n.data("swiper-autoheight") && n.data("swiper-autoheight"), p = !!n.data("swiper-autoplay") && n.data("swiper-autoplay"), u = !!n.data("swiper-centered-slides") && n.data("swiper-centered-slides"), h = n.data("swiper-pagination-type") ? n.data("swiper-pagination-type") : "bullets", f = (f = n.data("swiper-items")) || 1, g = (g = n.data("swiper-sm-items")) || f, m = (m = n.data("swiper-md-items")) || g, v = (v = n.data("swiper-lg-items")) || m, w = (w = n.data("swiper-xl-items")) || v, b = (b = n.data("swiper-space-between")) || 0, y = (y = n.data("swiper-sm-space-between")) || b, C = (C = n.data("swiper-md-space-between")) || y, k = (k = n.data("swiper-lg-space-between")) || C, x = (x = n.data("swiper-xl-space-between")) || k, new Swiper(n, {
                    pagination: {
                        el: o,
                        clickable: !0,
                        type: h
                    },
                    navigation: {
                        nextEl: i,
                        prevEl: s
                    },
                    slidesPerView: f,
                    spaceBetween: b,
                    initialSlide: d,
                    autoHeight: c,
                    centeredSlides: u,
                    mousewheel: !1,
                    keyboard: {
                        enabled: !0,
                        onlyInViewport: !1
                    },
                    grabCursor: !0,
                    autoplay: p,
                    effect: r,
                    coverflowEffect: {
                        rotate: 10,
                        stretch: 0,
                        depth: 50,
                        modifier: 3,
                        slideShadows: !1
                    },
                    speed: 800,
                    direction: l,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    observer: !0,
                    observeParents: !0,
                    breakpointsInverse: !0,
                    breakpoints: {
                        575: {
                            slidesPerView: g,
                            spaceBetweenSlides: y
                        },
                        767: {
                            slidesPerView: m,
                            spaceBetweenSlides: C
                        },
                        991: {
                            slidesPerView: v,
                            spaceBetweenSlides: k
                        },
                        1199: {
                            slidesPerView: w,
                            spaceBetweenSlides: x
                        }
                    }
                })
            })
        })
    }(),
    Tags = function() {
        var e = $('[data-toggle="tags"]');
        e.length && e.each(function() {
            $(this).tagsinput({
                tagClass: "badge badge-primary"
            })
        })
    }(),
    Typed = function() {
        var e = $(".typed");
        e.length && e.each(function() {
            var e, t, a, n;
            t = "#" + (e = $(this)).attr("id"), a = (a = e.data("type-this")).split(","), n = new Typed(t, {
                strings: a,
                typeSpeed: 100,
                backSpeed: 70,
                loop: !0
            }), inView(t).on("enter", function() {
                n.start()
            }).on("exit", function() {
                n.stop()
            })
        })
    }(),
    Wavify = function() {
        var e = $('[data-toggle="wavify"]');
        e.length && e.each(function() {
            $(this).find("path").wavify({
                height: 50,
                bones: 5,
                amplitude: 40,
                speed: .15
            })
        })
    }();
if ($('[data-toggle="apex-chart"]').length) {
    Apex.grid = {
        padding: {
            right: 0,
            left: 0
        }
    }, Apex.dataLabels = {
        enabled: !1
    };
    var randomizeArray = function(e) {
            for (var t, a, n = e.slice(), o = n.length; 0 !== o;) a = Math.floor(Math.random() * o), t = n[o -= 1], n[o] = n[a], n[a] = t;
            return n
        },
        sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
        colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"],
        spark1 = {
            chart: {
                type: "area",
                height: 160,
                sparkline: {
                    enabled: !0
                }
            },
            stroke: {
                width: 2,
                curve: "straight"
            },
            fill: {
                opacity: .2
            },
            series: [{
                name: "Hyper Sales ",
                data: randomizeArray(sparklineData)
            }],
            yaxis: {
                min: 0
            },
            colors: ["#DCE6EC"],
            title: {
                text: "$424,652",
                offsetX: 20,
                style: {
                    fontSize: "24px"
                }
            },
            subtitle: {
                text: "Sales",
                offsetX: 20,
                style: {
                    fontSize: "14px"
                }
            }
        },
        options1 = {
            chart: {
                type: "line",
                width: "100%",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            colors: ["#727cf5"],
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        },
        options2 = {
            chart: {
                type: "line",
                width: "100%",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            colors: ["#0acf97"],
            series: [{
                data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        },
        options3 = {
            chart: {
                type: "line",
                width: "100%",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            colors: ["#ffbc00"],
            series: [{
                data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        },
        options4 = {
            chart: {
                type: "line",
                width: "100%",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            colors: ["#fa5c7c"],
            series: [{
                data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
            }],
            stroke: {
                width: 2,
                curve: "smooth"
            },
            markers: {
                size: 0
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        },
        options5 = {
            chart: {
                type: "bar",
                width: "100%",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "80%"
                }
            },
            colors: ["#727cf5"],
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                }
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        },
        options6 = {
            chart: {
                type: "bar",
                width: "100%",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "80%"
                }
            },
            colors: ["#0acf97"],
            series: [{
                data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                }
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        },
        options7 = {
            chart: {
                type: "bar",
                width: "100%",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "80%"
                }
            },
            colors: ["#ffbc00"],
            series: [{
                data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
            }],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                }
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        },
        options8 = {
            chart: {
                type: "bar",
                width: "100%",
                height: 50,
                sparkline: {
                    enabled: !0
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "80%"
                }
            },
            colors: ["#fa5c7c"],
            series: [{
                data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            xaxis: {
                crosshairs: {
                    width: 1
                }
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function(e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
    new ApexCharts(document.querySelector("#apex-spark-1"), options1).render(), new ApexCharts(document.querySelector("#apex-spark-2"), options2).render(), new ApexCharts(document.querySelector("#apex-spark-3"), options3).render(), new ApexCharts(document.querySelector("#apex-spark-4"), options4).render(), new ApexCharts(document.querySelector("#apex-spark-5"), options5).render(), new ApexCharts(document.querySelector("#apex-spark-6"), options6).render(), new ApexCharts(document.querySelector("#apex-spark-7"), options7).render(), new ApexCharts(document.querySelector("#apex-spark-8"), options8).render()
}