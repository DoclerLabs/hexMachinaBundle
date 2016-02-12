package;

import hex.HexCoreSuite;
import hex.HexInjectSuite;
import hex.HexIoCSuite;
import hex.HexMVCSuite;
import hex.HexServiceSuite;
import hex.HexUnitSuite;
import hex.state.HexStateSuite;
import hex.unittest.notifier.ConsoleNotifier;
import hex.unittest.runner.ExMachinaUnitCore;

#if flash
import hex.unittest.notifier.TraceNotifier;
#else
#end

/**
 * ...
 * @author Francis Bourre
 */
class MainIoCTest
{
	static public function main() : Void
	{
		var emu = new ExMachinaUnitCore();
        
		#if flash
		emu.addListener( new TraceNotifier( false ) );
		#else
		emu.addListener( new ConsoleNotifier( false ) );
		#end
		
        emu.addTest( HexUnitSuite );
        emu.addTest( HexCoreSuite );
        emu.addTest( HexInjectSuite );
        emu.addTest( HexServiceSuite );
        emu.addTest( HexMVCSuite );
        emu.addTest( HexIoCSuite );
        emu.addTest( HexStateSuite );
        emu.run();
	}
}