import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import firstProductSec from './Seed';
import FirstProductFunc from './FirstProductFunc';

function App() {
  const firstProductList = firstProductSec.map((product) => {
    return <FirstProductFunc
      productImage={product.productImage}
      productName={product.productName}
      items={product.items} />
  })
  return (
    <div className="box container-fluid">
      <div className="top-products row">
        {firstProductList}
      </div>
    </div>
  );
}

export default App;
