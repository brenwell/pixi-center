/**
 * pixi-pause is a plugin for pixi.js, which automatically pause and resumes your App when the browser window's visibilty changes
 */

(function init(pixi)
{
    if (!pixi)
    {
        throw new Error("PIXI was not found")
    }

    if (!pixi.ticker || !pixi.ticker.shared)
    {
        throw new Error("PIXI.ticker was not found")
    }

    pixi.autoPause = true

    let hidden;
    let visibilityChange;

    const handleVisibilityChange = () =>
    {
        if (!pixi.autoPause) return;

        if (document[hidden])
        {
            pixi.ticker.shared.stop()
        }
        else
        {
            pixi.ticker.shared.start()
        }
    };

    if (typeof document.hidden !== "undefined")
    {
        // Opera 12.10 and Firefox 18 and later support
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    }
    else if (typeof document.mozHidden !== "undefined")
    {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
    }
    else if (typeof document.msHidden !== "undefined")
    {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    }
    else if (typeof document.webkitHidden !== "undefined")
    {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    // Handle page visibility change
    return document.addEventListener(visibilityChange, handleVisibilityChange, false);


// eslint-disable-next-line
}(PIXI));
