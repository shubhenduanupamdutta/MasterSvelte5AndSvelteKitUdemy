import { json } from "@sveltejs/kit";

export async function POST({request}) {
    const requestBody = await request.json();

    console.log(requestBody);

    // Business logic -> We'll send out an email to the customer

    return json({message: 'Email sent to the customer'});
}