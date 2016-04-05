package;

import flash.Lib;
import hex.HexAnnotationSuite;
import hex.HexCoreSuite;
import hex.HexInjectSuite;
import hex.HexIoCSuite;
import hex.HexMVCSuite;
import hex.HexServiceSuite;
import hex.HexUnitSuite;
import hex.state.HexStateSuite;
import hex.unittest.notifier.TraceNotifier;
import hex.unittest.runner.ExMachinaUnitCore;

class HexMachinaFlash
{
    static public function main() : Void
    {
		var emu : ExMachinaUnitCore = new ExMachinaUnitCore();
        emu.addListener( new TraceNotifier( Lib.current.loaderInfo ) );
		
		emu.addTest( HexCoreSuite );
		emu.addTest( HexMVCSuite );
		emu.addTest( HexInjectSuite );
        emu.addTest( HexIoCSuite );
        emu.addTest( HexUnitSuite );
		emu.addTest( HexStateSuite );
		emu.addTest( HexServiceSuite );
		emu.addTest( HexAnnotationSuite );
		
        emu.run();
	}
}