({
    browsers: ["-IE8", "-IE9", "-IE10", "-IE11", "-FIREFOX", "-SAFARI", "-IPHONE", "-IPAD"],

    setUp: function (cmp) {
        cmp.set("v.testUtils", $A.test);
    },

    testApiPropertiesAccessedViaModule: {
        test: function(cmp) {
            cmp.testApiPropertiesAccessedViaModule();
        }
    },

    testApiMethodsAccessedViaModule: {
        test: function(cmp) {
            cmp.testApiMethodsAccessedViaModule();
        }
    }
})
