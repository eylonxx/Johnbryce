class Config {
  public supportEmail = 'support@northwind.com';
  public supportPhone = '031234567';
  public supportPage = '';
  public registerUrl = '';
  public loginUrl = '';
  public productsUrl = '';
  public productImagesUrl = '';
}

class DevelopmentConfig extends Config {
  public supportPage = 'http://northwnd.com/it-support/';
  public registerUrl = 'http://localhost:3030/api/auth/register/';
  public loginUrl = 'http://localhost:3030/api/auth/login/';
  public productsUrl = 'http://localhost:3030/api/products/';
  public productImagesUrl = 'http://localhost:3030/api/products/images/';
}

class TestConfig extends Config {
  public supportPage = 'http://northwnd.com/qa-support/';
  public registerUrl = 'http://localhost:3030/api/auth/register/';
  public loginUrl = 'http://localhost:3030/api/auth/login/';
  public productsUrl = 'http://localhost:3030/api/products/';
  public productImagesUrl = 'http://localhost:3030/api/products/images/';
}

class ProductionConfig extends Config {
  public supportPage = 'http://northwnd.com/support/';
  public registerUrl = 'http://localhost:3030/api/auth/register/';
  public loginUrl = 'http://localhost:3030/api/auth/login/';
  public productsUrl = 'http://localhost:3030/api/products/';
  public productImagesUrl = 'http://localhost:3030/api/products/images/';
}

let config: Config;

if (process.env.NODE_ENV === 'development') {
  config = new DevelopmentConfig();
} else if (process.env.NODE_ENV === 'test') {
  config = new TestConfig();
} else if (process.env.NODE_ENV === 'production') {
  config = new ProductionConfig();
}

export default config;
