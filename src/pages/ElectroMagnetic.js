
import './ERT.css';
const ElectroMagnetic=()=>{
    return(
        
        <div class="ert-container">
            <div id="ert-h1">
            <h1>Electromagnetic (EM) Survey</h1>
            </div>
        
        <div class="ert-item">
            <img id="ert-img" src="http://geosiamservices.com/wp-content/uploads/2015/07/AEM02-1024x689.jpg"
                alt="No image found" width="600px" height="400px" />
            <p id="ert-p">
                The electromagnetic method otherwise referred to as the EM method measures the response of induced
                electromagnetic fields into the ground. The electromagnetic fields comprise alternating electric
                intensity and magnetic force. Contrary to other conventional resistivity methods, this method does not
                need ground contact and hence problems related to direct electrical coupling could be avoided.
                Therefore, this method provides faster and easier data acquisition and is mostly used as reconnaissance
                tools. It is often employed in detecting anomalies for further investigation. When a conductive body
                buried in the subsurface responds to incoming primary electromagnetic field from a transmitter, it
                produces eddy currents on the conductor which in turn produces a secondary electromagnetic field. The
                resultant of the primary and secondary fields is detected by the receiver (Oghenekohwo, 2008). All
                anomalous bodies which have high electrical conductivity produce strong secondary electromagnetic
                fields. Some ore bodies which contain materials that are themselves insulators are likely to produce
                secondary fields if considerable quantities of that substance with a high conductivity are present
                (Kearey and Brooks, 2002). In practice, current is induced into the subsurface by a transmitting coil
                and a receiving coil is positioned a short distance away to measure the induced earth current. The
                magnitude of the current induced is dependent on the type of geologic/ burried material underneath the
                transmitter and the receiver. The measured quantity is the apparent conductivity with units in
                millimhos/meter (m mhos/m).
            </p>
        </div>
        </div>
    );
}
export default ElectroMagnetic;