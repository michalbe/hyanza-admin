define(['knockout', 'components/default/default'], function(ko, subject) {
  var ViewModel = subject.viewModel;

  describe('Default Component view model', function() {

    it('should set quantity to 0 when not defined', function() {
      var instance = new ViewModel();
      expect(instance.qty()).toEqual(0);
    });

    it('should set quantity to given number', function() {
      var instance = new ViewModel({
        qty: ko.observable(8)
      });
      expect(instance.qty()).toEqual(8);
    });

    it('qty initialized with negative number should change to 0', function() {
      var instance = new ViewModel({
        qty: ko.observable(-9)
      });
      expect(instance.qty()).toEqual(0);
    });

    it('increment method should increment quantity by 1', function() {
      var instance = new ViewModel();

      expect(instance.qty()).toEqual(0);
      instance.increment();
      expect(instance.qty()).toEqual(1);
    });

    it('decrement method should decrement quantity by 1, but not below 0', function() {
      var instance = new ViewModel({
        qty: ko.observable(1)
      });

      expect(instance.qty()).toEqual(1);
      instance.decrement();
      expect(instance.qty()).toEqual(0);
      instance.decrement();
      expect(instance.qty()).toEqual(0);
    });

  });
});
