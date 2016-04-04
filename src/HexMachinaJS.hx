package;

import hex.HexAnnotationSuite;
import hex.HexCoreSuite;
import hex.HexInjectSuite;
import hex.HexIoCSuite;
import hex.HexMVCSuite;
import hex.HexServiceSuite;
import hex.HexUnitSuite;
import hex.state.HexStateSuite;
import hex.unittest.notifier.BrowserUnitTestNotifier;
import hex.unittest.runner.ExMachinaUnitCore;

class HexMachinaJS
{
    static public function main() : Void
    {
		var emu : ExMachinaUnitCore = new ExMachinaUnitCore();
        emu.addListener( new BrowserUnitTestNotifier( "console" ) );
		
		emu.addTest( HexMVCSuite );
		emu.addTest( HexCoreSuite );
        emu.addTest( HexInjectSuite );
        emu.addTest( HexIoCSuite );
        emu.addTest( HexUnitSuite );
		emu.addTest( HexStateSuite );
		emu.addTest( HexServiceSuite );
		emu.addTest( HexAnnotationSuite );
        emu.run();
	}
}