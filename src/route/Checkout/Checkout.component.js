import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper';
import CheckoutProgress from 'Route/Checkout/CheckoutProgress';


import './Checkout.override.style';

export class Checkout extends SourceCheckout {
    // TODO implement logic


    renderCheckoutProgress() {
        const { checkoutStep } = this.props;

        const stepTitles = [];
        Object.values(this.stepMap).forEach((step) => stepTitles.push(step.title));

        let { number } = this.stepMap[checkoutStep];
        
        // If a step doesn't have a number, then it's the last step
        if (!number) number = Object.keys(this.stepMap).length 
        

        return (
            <CheckoutProgress stepTitles={stepTitles} currentStepIndex={ number - 1 } />
        )
    }


    // Override render method to add CheckoutProgress component
    render() {
        return (
            <main block="Checkout">
                {this.renderCheckoutProgress()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
};

export default Checkout