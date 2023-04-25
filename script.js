// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};
// selector function is undefined it is not clear what it is supposed to do
const status_ = document.queryselectorAll('.status');
const reserve = document.queryselectorAll('.reserve');
const checkout =document.queryselectorAll('.checkout'); 
const checkin = document.queryselectorAll('.checkin'); // checkin.0 are not valid as they are trying to access and index that is not a variable
console.log(status_)

for (let i = 0; i < status_.length; i++) {
    const currentStatus = status_[i].textContent.trim();
    status_[i].style.color = STATUS_MAP[currentStatus].color;
    reserve[i].disabled = !STATUS_MAP[currentStatus].canReserve;
    checkout[i].disabled = !STATUS_MAP[currentStatus].canCheckout;
    checkin[i].disabled = !STATUS_MAP[currentStatus].canCheckIn;
}
