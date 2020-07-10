import { getCurrentPath, hash, unhash } from '../';

describe('Utils', () => {
  describe('getCurrentPath', () => {
    const window = {
      location: {
        origin: 'https://example.com',
        href: 'https://example.com/example/path',
      },
    } as Window;

    it('returns the correct path', () => {
      expect(getCurrentPath(window)).toBe('/example/path');
    });
  });

  describe('hash', () => {
    it('returns the correct hashed value', () => {
      expect(hash('example')).toBe('/#example');
      expect(hash('/example')).toBe('/#example');
      expect(hash('/#example')).toBe('/#example');
    });
  });

  describe('unhash', () => {
    it('returns the correct unhashed value', () => {
      expect(unhash('example')).toBe('/example');
      expect(unhash('#example')).toBe('/example');
      expect(unhash('/#example')).toBe('/example');
    });
  });
});
