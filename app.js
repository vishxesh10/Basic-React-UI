import React from "react";
import ReactDOM from "react-dom/client";


// 🔹 Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="img-container"
          src="https://www.logodesign.net/logo-new/food-truck-with-ice-creams-on-top-8848ld.png"
          alt="logo"
        />
      </div>
      <nav className="Nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

// 🔹 Restaurant Card Component
const RestaurantCard = ({ resData }) => {
  const { image, name, cuisine, rating, deliveryTime } = resData?.data || {};

  return (
    <div className="res-card">
      <img className="card-img" alt={name} src={image} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐ {rating}</h4>
      <h4>📖 {deliveryTime}</h4>
    </div>
  );
};

// 🔹 Restaurant Data
const resArr = [
  {
    data: {
      id: 1,
      name: "Hungerz",
      cuisine: "Biryani, Pulao, Roti",
      rating: "4.7",
      deliveryTime: "30 Minutes",
      image: "https://imgs.search.brave.com/KNINLgtcKq7qbtRgLxBqWim3W4gffRq1nokgGKwaKlk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZi1z/dC5zYy1jZG4ubmV0/L2QvWlYxb2Z1UE1h/eEhEeTZvVGZhNWRM/LjEwMjMuSVJaWFNP/WT9tbz1HbDRhRUJv/QUdnQXlBUVE2QVgx/SUFsQkpZQUZhRUZC/MVlteHBZMGx0WVdk/bFUzUnZjbm1pQVJv/SV93Y2lGUW9JUWdZ/SXg1ajV1d1lTQUNv/SFNWSmFXRk5QV2FJ/Qkdnam5CeUlWQ2do/Q0JnakltUG03QmhJ/QUtnZEpVbHBZVTA5/WiZ1Yz03Mw"
    }
  },
  {
    data: {
      id: 2,
      name: "KFC",
      cuisine: "Fried Chicken, Burgers, Fries",
      rating: "4.3",
      deliveryTime: "25 Minutes",
      image: "https://imgs.search.brave.com/VUHyGIGYyC2N01bmjGmaByYran2NzLgYETEU_PDNUGA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/NjYyNzY4NC9waG90/by9rZmMta2VudHVj/a3ktZnJpZWQtY2hp/Y2tlbi1mYXN0LWZv/b2QtcmVzdGF1cmFu/dC1jb2xvbmVsLXNh/bmRlcnMtY2FyZGlu/YWwtcGFyay1pcHN3/aWNoLXN1ZmZvbGsu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWR2dldoenQ5SnI0/WVhtNlVhcUZSRUE5/UnJWSWQtTzAxZ2Jz/OExJaHpPVTg9"
    }
  },
  {
    data: {
      id: 3,
      name: "Domino's",
      cuisine: "Pizza, Garlic Bread, Beverages",
      rating: "4.2",
      deliveryTime: "28 Minutes",
      image: "https://imgs.search.brave.com/Z8WAVfbZ5U-3UzWGsP75Kcp2CYzNY-qPUgv2FJ_4xMs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk2Lzlk/LzUwLzk2OWQ1MDAz/ZTg4Y2Y1MWY3ZTM5/MWMwZjA4OTA2YzZm/LmpwZw"
    }
  },
  {
    data: {
      id: 4,
      name: "Subway",
      cuisine: "Sandwiches, Salads, Wraps",
      rating: "4.0",
      deliveryTime: "20 Minutes",
      image: "https://imgs.search.brave.com/n0brg6guxhyeCniRqFuSLCGMBZg-yueJfFeDrRHRHC8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zMy1t/ZWRpYTAuZmwueWVs/cGNkbi5jb20vYnBo/b3RvL3gwRkpTN1ZV/Q1pCRWk1QmJ6VFNq/YncvMzQ4cy5qcGc"
    }
  },
  {
    data: {
      id: 5,
      name: "Barbeque Nation",
      cuisine: "Buffet, Tandoori, Grill",
      rating: "4.5",
      deliveryTime: "40 Minutes",
      image: "https://imgs.search.brave.com/vtUp69HvHtlqlh3vzHQSU89isKO74gXvC3Pv1qAHZOI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZkL0dvb2RfRm9v/ZF9EaXNwbGF5Xy1f/TkNJX1Zpc3VhbHNf/T25saW5lLmpwZw"
    }
  },
  {
    data: {
      id: 6,
      name: "Haldiram's",
      cuisine: "North Indian, Sweets, Snacks",
      rating: "4.4",
      deliveryTime: "22 Minutes",
      image: "https://imgs.search.brave.com/KRLfe5bvGsubYDL0Y1YwJ4ZW1IpTT6T3ytfflAcsJbQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/OTkxLzAwNy9zbWFs/bC9hLXJlYWxpc3Rp/Yy1hc3NvcnRtZW50/LW9mLWFmcmljYW4t/ZmFzdC1mb29kLWFu/ZC1qdW5rLWZvb2Qt/aXRlbXMtYXJyYW5n/ZWQtb24tYS1jbGVh/bi1pc29sYXRlZC13/aGl0ZS1iYWNrZ3Jv/dW5kLXRoZS1jb2xs/ZWN0aW9uLWluY2x1/ZGVzLWEtcGxhdGUt/b2Ytam9sbG9mLXJp/Y2Utd2l0aC1ncmls/bGVkLWNoaWNrZW4t/YW5kLW1vcmUtZXRj/LWZyZWUtcGhvdG8u/SlBH"
    }
  },
  {
    data: {
      id: 7,
      name: "Burger King",
      cuisine: "Burgers, Wraps, Beverages",
      rating: "4.1",
      deliveryTime: "26 Minutes",
      image: "https://imgs.search.brave.com/UoyHrSSuxE6PjF8cox3rYSLbWK1DjrvsGkJL2OqotkU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/NTU1LzE4Mi9zbWFs/bC9mYXN0LWZvb2Qt/b24tdGhlLXRhYmxl/LWdlbmVyYXRpdmUt/YWktcGhvdG8uanBn"
    }
  },
  {
    data: {
      id: 8,
      name: "Taco Bell",
      cuisine: "Mexican, Tacos, Nachos",
      rating: "4.0",
      deliveryTime: "27 Minutes",
      image: "https://imgs.search.brave.com/ggsVxzu5KYlDFiuvroyzKQxAcTMlwjDQE-v81APdynM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9tYW55LWRp/ZmZlcmVudC1oZWFs/dGh5LWZvb2Qtb24t/MjYwbnctMjQ3NzE1/Mzg1MS5qcGc"
    }
  },
  {
    data: {
      id: 9,
      name: "McDonald's",
      cuisine: "Burgers, Fries, Beverages",
      rating: "4.2",
      deliveryTime: "24 Minutes",
      image: "https://imgs.search.brave.com/A2cjMUwRdiBQq5SUsA-Bsnjq2K5VwPaUX-N-m7w_BOE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzIxLzg4LzE4/LzM2MF9GXzkyMTg4/MTg2NV9FVWlxU2Q3/Q1VZOXlnY1NRY3Nr/T3hMUEdjeVk4OEZG/Yi5qcGc"
    }
  },
  {
    data: {
      id: 10,
      name: "Wow! Momo",
      cuisine: "Momos, Thukpa, Tibetan",
      rating: "4.1",
      deliveryTime: "18 Minutes",
      image: "https://imgs.search.brave.com/Mv7sver0-IRSelC89aUJ55d8Jn8sip64nB9NpjZFRwk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTgv/NTAwLzczMi9zbWFs/bC9hc3NvcnRtZW50/LW9mLWZyZXNoLWZv/b2QtaW5ncmVkaWVu/dHMtZm9yLWhlYWx0/aHktbWVhbC1wcmVw/YXJhdGlvbi1vbi10/YWJsZS1waG90by5q/cGc"
    }
  },
  {
    data: {
      id: 11,
      name: "The Belgian Waffle Co.",
      cuisine: "Waffles, Ice Cream, Desserts",
      rating: "4.3",
      deliveryTime: "20 Minutes",
      image: "https://imgs.search.brave.com/vajD4RasO2AI4rsKwghxXrrjNEnKuiDyUFcwojy0USY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzQv/MjM1Lzc2My9zbWFs/bC90d28taGFtYnVy/Z2Vycy1hbmQtZnJl/bmNoLWZyaWVzLXNh/dWNlcy1hbmQtZHJp/bmtzLW9uLXJlZC1i/YWNrZ3JvdW5kLWZh/c3QtZm9vZC10b3At/dmlldy1mbGF0LWxh/eS13aXRoLWNvcHlz/cGFjZS1waG90by5q/cGc"
    }
  },
  {
    data: {
      id: 12,
      name: "Faasos",
      cuisine: "Rolls, Wraps, Quick Bites",
      rating: "4.0",
      deliveryTime: "23 Minutes",
      image: "https://source.unsplash.com/600x400/?wraps"
    }
  },
  {
    data: {
      id: 13,
      name: "Behrouz Biryani",
      cuisine: "Royal Biryani, Kebab, Gulab Jamun",
      rating: "4.6",
      deliveryTime: "35 Minutes",
      image: "https://source.unsplash.com/600x400/?royal-biryani"
    }
  },
  {
    data: {
      id: 14,
      name: "Ovenstory Pizza",
      cuisine: "Cheese Pizza, Pasta, Beverages",
      rating: "4.3",
      deliveryTime: "29 Minutes",
      image: "https://source.unsplash.com/600x400/?cheese-pizza"
    }
  },
  {
    data: {
      id: 15,
      name: "Chai Point",
      cuisine: "Tea, Snacks, Paratha",
      rating: "4.2",
      deliveryTime: "15 Minutes",
      image: "https://source.unsplash.com/600x400/?tea"
    }
  }
];




// 🔹 Body Component
const Body = () => {
  return (
    <main className="body">
      <div className="search">
        <input type="text" placeholder="Search restaurants..." />
      </div>
      <div className="res-container">
        {resArr.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </main>
  );
};

// 🔹 App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// 🔹 Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
