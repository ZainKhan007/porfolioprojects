(function() {
    "use strict";
    angular
          .module("productManagement")
          .controller("ProductListCtrl",
          ["productResource",
              ProductListCtrl]);

    function ProductListCtrl(productResource) {
      var vm = this;
      productResource.query(function(data) {
          vm.products = data;
      })
      // vm.products = [
      // {
      //   "productId":1,
      //   "productName":"Leaf Rake",
      //   "productCode":"GDN-0011",
      //   "productDate":"March 19, 2009",
      //   "description":"Leaf rake with 48-inch handle.",
      //   "cost":9.00,
      //   "price":19.95,
      //   "category":"garden",
      //   "tags":["leaf","tool"],
      //   "imageUrl":"images/cake.jpg",
      // },
      // {
      //   "productId":2,
      //   "productName":"Cake Rake",
      //   "productCode":"GDN-0015",
      //   "productDate":"March 24, 2009",
      //   "description":"Cake rake with 48-inch handle.",
      //   "cost":19.00,
      //   "price":149.95,
      //   "category":"garden",
      //   "tags":["cake","tool"],
      //   "imageUrl":"images/cake.jpg",
      // }];
      vm.showImage = false;
      vm.toggleImage = function() {
        vm.showImage = !vm.showImage;
      }
    }
}());
