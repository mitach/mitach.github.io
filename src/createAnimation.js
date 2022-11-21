export function spinAnimation(index, step) {
    const numberSpan = document.querySelector(`.number_${index}`);

    const spinAnimationKeyframes = new KeyframeEffect(
        numberSpan,
        [
            { transform: 'translateY(-80px)' },
            { transform: 'translateY(80px)' },
        ], {
            // duration: 200 + (10 * step),
            duration: 200,
            iterations: Infinity,
        }
    );

    let spinAnimation = new Animation(spinAnimationKeyframes, document.timeline);
    
    return spinAnimation;
}

export function lastSpinRotation(index, duration) {
    const slot = document.querySelector(`.number_${index}`);

    const slotSpinAnimationKeyframes = new KeyframeEffect(
        slot,
        [
            { transform: 'translateY(-80px)' },
            { transform: 'translateY(0px)' },
        ], {
            duration: duration,
            iterations: 1,
        }
    );

    let slotSpinAnimation = new Animation(slotSpinAnimationKeyframes, document.timeline);

    return slotSpinAnimation.play();
}