// Reasons why dad is awesome
const reasons = [
    "You always know how to fix anything I break.",
    "I love you dad. That's the best gift I give.",
    "You give the absolute best advice when things get tough.",
    "Thank you for always believing in me, even when I don't."
];

// Coupons he can redeem
const coupons = [
    "🎟️ FREE Pass: Ultimate control of the TV remote for one full weekend.",
    '🎟️ FREE Pass: A day of uninterrupted sleep-in, no alarms allowed in SUNDAY.',
];

let reasonIndex = 0;

document.getElementById('message-btn').addEventListener('click', () => {
    reasonIndex = (reasonIndex + 1) % reasons.length;
    document.getElementById('dynamic-message').innerText = reasons[reasonIndex];
});

document.getElementById('coupon-btn').addEventListener('click', () => {
    const randomCoupon = coupons[Math.floor(Math.random() * coupons.length)];
    document.getElementById('coupon-display').innerText = randomCoupon;
});