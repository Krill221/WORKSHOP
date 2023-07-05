import { useState } from "react";
import { useRouter } from 'next/router';

const cart_default = {
    "order_items": [
        { "id": 1, "quantity": 2 },
        { "id": 2, "quantity": 1 }
    ]
}

export default function Post() {

    const [cart, setCart] = useState(cart_default);
    const router = useRouter();


    const handlePayment = async () => {

        try {
            const resp = await fetch(
                'http://localhost:3000/stripe/create-session',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        order_items: cart.order_items
                    })
                }

            )
            if( resp.ok) {
                const body = await resp.json()
                router.push(body.url)
            }
        } catch (e){
            console.log(e)
        }
    }

    return (
        <main>
            <section>
                <ul>
                    {
                        cart.order_items.map(item => <li key={item.id}>
                            id: {item.id} quantity: {item.quantity}
                        </li>)
                    }
                </ul>
            </section>
            <button onClick={handlePayment} >Pay</button>
        </main>
    );
}