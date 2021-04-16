import React from 'react';

export default function Advanced_Settings() {
    return (
         <div className="advancedSettings">
            <h1>Advanced settings for the Camera</h1>
            <form>
                <label>
                    Resolution:
                    <input type="text" name="resolution" />
                </label>
                <input type="submit" value="Submit" />
            </form>
         </div>
    )
}