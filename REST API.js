import { stringify } from "querystring";

let api = [
    {
        description: 'Get all orders',
        request:{
          method: 'get',
          url: '/rest/orders/'
        },
        response:{
          content:{
            id: Number,
            firstName: String,
            lastName: String,
            email: String,
            date: String
          }
        }
      },
  {
    description: 'Get order by id',
    request:{
      method: 'get',
      url: '/rest/orders/:id',
      params: ['id']
    },
    response:{
      content:{
        id: Number,
        firstName: String,
        lastName: String,
        email: String,
        date: String
      }
    }
  },
  {
    description: 'Create one order',
    request:{
      method: 'post',
      url: '/rest/orders/',
      body:{
        firstName: String,
        lastName: String,
        address: String,
        email: String,
        payMethod: String

      }
    },
    response:{
      statusCode: Number,
      error: Object
    }
  },
  {
    description: 'Create a tshirt',
    request:{
      method: 'post',
      url: '/rest/tshirt/',
      body:{
        size: String,
        text: String,
        material: String,
        price: Number,
      }
    },
    response:{
      statusCode: Number,
      error: Object
    }
  },
  {
    description: 'Delete tshirt by id',
    request:{
      method: 'delete',
      url: '/rest/tshirt/:id',
      params: ['id'],
    },
    response:{
      statusCode: Number,
      error: Object
    }
  },
  {
    description: 'Update order by id',
    request:{
      method: 'put',
      url: '/rest/orders/:id',
      params: ['id'],
      body:{
          firstName: String,
          lastName: String,
          address: String,
          email: String,
          payMethod: String
      }
    },
    response:{
      statusCode: Number,
      error: Object
    }
  },
  {
    description: 'Delete order by id',
    request:{
      method: 'delete',
      url: '/rest/orders/:id',
      params: ['id'],
    },
    response:{
      statusCode: Number,
      error: Object
    }
  },
  {
    description: 'Create payment',
    request:{
      method: 'post',
      url: '/rest/payment/',
      body:{
        type: String,    //card or invoice
        number: String,
        expires: String,
        amount: Number,
        address: String,
        phone_nbr: Number      
    }
    },
    response:{
      statusCode: Number,
      error: Object
    }
  },
  {
    description: 'Update payment',
    request:{
      method: 'put',
      url: '/rest/payment/:id',
      params: ['id'],
      body:{
        type: String,    //card or invoice
        number: String,
        expires: String,
        amount: Number,
        address: String,
        phone_nbr: Number      
    }
    },
    response:{
      statusCode: Number,
      error: Object
    }
  }
]