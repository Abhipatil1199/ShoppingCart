
import { Button, Form } from 'react-bootstrap'
import './filter.css'
import Rating from './Rating';
import { CartState } from '../context/Context';

function Filter() {

  // const [rate, setRate] = useState(3);

  const { productState: { byStock, byFastDelivery, sort, byRating,searchQuery },
   productDispatch } = CartState();

console.log(byStock, byFastDelivery, sort, byRating,searchQuery);

  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name='group1'
          type='radio'
          id={'inline-1'}
          onChange={()=>
            productDispatch({
              type:"SORT_BY_PRICE",
              payload:"lowToHigh"
            })
          }
          checked={sort === "lowToHigh"?true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name='group1'
          type='radio'
          id={'inline-2'}
          onChange={()=>
            productDispatch({
              type:"SORT_BY_PRICE",
              payload:"highToLow"
            })
          }
          checked={sort === "highToLow" ? true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name='group1'
          type='checkbox'
          id={'inline-3'}
          onChange={()=>
            productDispatch({
              type:"FILTER_BY_STOCK"
            })
          }
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name='group1'
          type='radio'
          id={'inline-4'}
          onChange={()=>
            productDispatch({
              type:"FILTER_BY_DELIVERY"
            })
          }
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating rating={byRating} onClick={(i) => productDispatch({
          type:'FILTER_BY_RATING',
          payload:i+1
        })} style={{ cursor: "pointer" }} />
      </span>
      <Button 
        variant='light'
        onClick={()=>
        productDispatch({
          type:"CLEAR_FILTERS"
        })}
      
      >clear Filters</Button>
    </div>
  )
}

export default Filter