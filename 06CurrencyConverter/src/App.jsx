import { useState } from 'react'
import {InputBox} from './components'
import usecurrencyinfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("usd")
  const [convertedAmount,setConvertedAmount]=useState(0)


  // hooks
  const currencyinfo=usecurrencyinfo(from)

  const options=Object.keys(currencyinfo||{})
  console.log("currencyinfo:", currencyinfo);

  const swap = () => {
    const tempFrom = from
    const tempTo = to

    setFrom(tempTo)
    setTo(tempFrom)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
  if (currencyinfo && currencyinfo[to]) {
    setConvertedAmount(amount * currencyinfo[to])
  }
}

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/34862454/pexels-photo-34862454.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>{
                                  setAmount(amount)
                                }}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
