describe('Object handling', function() {
    it('should remove property of an object', function() {
        let obj = {
            a: 4,
            b: 3,
            c: true,
            d: false
        };

        expect(removeProperty(obj, 'a')).toBe(true);
        expect(removeProperty(obj, 'e')).toBe(false);
        expect(obj.a).toBeUndefined();
    });

    it('should validate a Person', function() {
      var p = {
          name: 'Lorem',
          lastname: 'Ipsum',
          email: 'email@test.com',
          age: 99
      };

      var p2 = {
          name: 'Lorem',
          email: 'test@email.com',
          age: 40
      };

      var p3 = {
          name: 'Lorem',
          lastname: 'Ipsum',
          email: 'test@email.com',
          age: 80,
          phone: 123456
      }

      expect(validatePerson(p)).toBe(true);
      expect(validatePerson(p2)).toBe(false);
      expect(validatePerson(p3)).toBe(false);
      expect(p3.phone).toBeUndefined();
    });

    it('should filter by Property', function() {
        var users = [
            {
                name: 'Lorem',
                role: 'Admin'
            },
            {
                name: 'Lorem',
                role: 'Admin'
            },
            {
                name: 'Lorem',
                role: 'Manager'
            },
            {
                name: 'Lorem',
                role: 'Manager',
                id: 4
            },
            {
                name: 'Lorem',
                role: 'Client'
            }
        ];

        expect(filterObjectsByProperty(users, 'role', 'Manager').length).toBe(2);
        expect(filterObjectsByProperty(users, 'id', 4).length).toBe(1);
        expect(filterObjectsByProperty(users, 'role', 'Client').length).toBe(1);
        expect(filterObjectsByProperty(users, 'none', 'None').length).toBe(0);
    });

    it('should inverse words in a phrase', function() {
        let m = 'hello pretty world';
        let im = 'olleh ytterp dlrow';

        expect(reverseWords(m)).toEqual(im);
    });

    it('should find the most frequent item in array', function() {
        let arr = [1,3,'a', 4, 'a', 3, 'a'];
        let arr2 = [1, 3,'b', 4, 'b', 3, 'b', 3];

        expect(mostFrequentItem(arr)).toBe('a: 3 times');
        expect(mostFrequentItem(arr2)).toBe('b and 3: 3 times');
    });
});
