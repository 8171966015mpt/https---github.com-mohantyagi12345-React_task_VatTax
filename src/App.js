import {useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './Components/Data.json'
import Modal from './Components/Modal/Modal';

function App() {
  const [items, setItems] = useState("there are no products")
  const [itemPrice, setItemPrice] = useState(0)
  let [num, setNum] = useState(0);
  const [vatrate, setVatrate] = useState(0)
  const [disc, setDisc] = useState(0)
  const [show, setShow] = useState(false);


  // functionality

  function AddProduct(e) {
    setNum(0)
    Data && Data.map(i => {
      if (i.image == e.target.src) {
        setItems(i.name)
        setItemPrice(i.price)
      }

    })

  }

  let incNum = () => {
    if (num >= 0) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }

  let handleChange = (e) => {
    setNum(e.target.value);


  }

  const ResetItem = () => {
    setItems("there are no products")
    setItemPrice(0)
    setNum(0)
    setVatrate(0)
    setDisc(0)
  }
  const resetAll = () => {
    setItems("there are no products")
    setItemPrice(0)
    setNum(0)
    setVatrate(0)
    setDisc(0)
    window.location.reload()
  }



  function calculationvat(e) {
    setVatrate(e.target.value)
  }
  function calculationdis(e) {
    setDisc(e.target.value)
  }

  return (
    <>
      <div className='main_div'>
        <div className="main_page">
          <header>
            <div className='container'>
              <div className='naw'>
                <div className='product'>
                  <p className='productName'>PRODUCTS</p>

                </div>
                <div className='product'>
                  <p className='productName'>PRICE</p>

                </div>
                <div className='product'>
                  <p>QUANTITY</p>
                </div>
                <div className='product'>
                  <p className='productName'>TOTAL</p>
                </div>
              </div>
            </div>

          </header>


          <div className='no_pro_main'>
            {items == "there are no products" ?
              <h2>{items}</h2> :
              <>
                <div className='container'>
                  <div className='naw'>
                    <button className='kk' onClick={ResetItem}>X</button>

                    <div className='product'>

                      {items}
                    </div>
                    <div className='product'>
                      {itemPrice}
                    </div>
                    <div className='product'>
                      <button onClick={decNum}>-</button>
                      <input value={num} onChange={handleChange} />
                      <button onClick={incNum}>+</button>
                    </div>
                    <div className='product'>

                      {itemPrice * num}
                    </div>
                  </div>
                </div></>
            }

          </div>
          <section className='sub_total'>
            <div className='total_value'>
              <div className='text'>
                <p>Sub Total</p>
                <hr />
                <p>VAT Tax</p>
                <hr />
                <p>Discount</p>
                <hr />
                <p>Total</p>
              </div>
              <div className='ppppp'>
                <div className='text_item'>
                  <div className='eur'>{itemPrice * num} EUR</div>
                  <div className='eur'>{num} item</div>
                </div>
                <hr />
                <div className='text_item'>
                  <input className='eur' name="vat" id="vatTax" placeholder='Enter the VAT %' onChange={(e) => { calculationvat(e) }} />%
                  <div className='eur'>{vatrate == "" || vatrate == null || vatrate == "undefined" ? 0 : (itemPrice * num) / (vatrate * 1000)} EUR</div>
                </div>
                <hr />
                <div className='text_item'>
                  <input className='eur' name="discount" id="discounttax" placeholder='Enter %' onChange={(e) => { calculationdis(e) }} />%
                  <div className='eur'>  {disc == "" || disc == null || disc == "undefined" ? 0 : (itemPrice * num) / (disc * 1000)} EUR</div>

                </div>
                <hr />
                <div className='text_item'>
                  <div className='eur itemcolor'>{((itemPrice * num) / (vatrate * 1000)) + ((itemPrice * num) / (disc * 1000)) + (itemPrice * num)} EUR</div>
                </div>
              </div>
            </div>
          </section>
          <div className='footer_btn'>
            <button className='btn red' onClick={resetAll}>cancel sale</button>
            <button className='btn green' onClick={() => setShow(true)}>process</button>
          <Modal show={show} onClose={() => setShow(false)} >
          <div className="content">
           <div className='lll'>
           <h2 className='headingg'>Reciept</h2>
           </div>
            <hr/>
           <div>
           <div className='naw'>
                <div className='product'>
                  <p className='productName'>PRODUCTS</p>

                </div>
                <div className='product'>
                  <p className='productName'>QUANTITY</p>

                </div>
                <div className='product'>
                  <p className='productName'>SUB TOTAL</p>
                </div>
              </div>
              <hr/>
              <div className='naw'>
                <div className='product'>
                  <p className='productName'>{items}</p>

                </div>
                <div className='product'>
                  <p className='productName'>{num}</p>

                </div>
                <div className='product'>
                  <p className='productName'>{itemPrice * num}</p>
                </div>
              </div>
              <hr/>
              <div className='naw'>
                <div className='product'>
                  <p className='productName'>Total Item</p>

                </div>
                <div className='product'>
                  <p className='productName'>{num} Total</p>

                </div>
                <div className='product'>
                  <p className='productName'>{itemPrice * num}</p>
                </div>
              </div>
              <hr/>
              <div className='naw'>
                <div className='product'>
                  <p className='productName'>Discount</p>

                </div>
                <div className='product'>
                  <p className='productName'>{disc}%</p>

                </div>
                {/* <div className='product'>
                  <p className='productName'>{itemPrice * num}</p>
                </div> */}
              </div>
              <hr/>
              <div className='naw'>
                <div className='product'>
                  <p className='productName'>vat</p>

                </div>
                <div className='product'>
                  <p className='productName'>{vatrate}%</p>

                </div>
               
              </div>
              <hr/>
           </div>

        </div>
          </Modal>
          </div>
        </div>
        <div className='img_gallery'>
          <div className='images'>
            {Data.map(gg => {
              return (
                <div className='box'>
                  <img src={gg.image} onClick={(e) =>
                    AddProduct(e)} />
                  <p>{gg.name}</p>
                </div>
              )


            })}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
