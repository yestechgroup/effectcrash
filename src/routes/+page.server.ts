import { Fancy } from '$lib/Fancy.js';
import { Effect } from 'effect';
import { cons } from 'effect/List';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
    console.log('load');
    let result = undefined;
    
    try {
        const fancy = new Fancy();
        const program = fancy.giveMeANumberAsync(4);
        // result = await Effect.runPromise(program);
        console.log('result', program);
    } catch (error) {
        console.log('Effect crashes sveltekit', error);
    }

    // // Doesnt crash- error 500
    // const fancy = new Fancy();
    // const program = await fancy.giveMeANumberAsync2(4);

       



 
    
    return {
        
        props: {
        server: true
        }
    }
}