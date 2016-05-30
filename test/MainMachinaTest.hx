package;

import hex.unittest.notifier.BrowserUnitTestNotifier;
import hex.unittest.notifier.WebSocketNotifier;
import hex.unittest.runner.ExMachinaUnitCore;
import hex.unittest.runner.TestRunner;

#if flash
import flash.Lib;
import hex.unittest.notifier.TraceNotifier;
#else
import hex.unittest.notifier.ConsoleNotifier;
#end

/**
 * ...
 * @author Francis Bourre
 */
class MainMachinaTest
{
	static public function main() : Void
	{
		var emu = new ExMachinaUnitCore();
        
		#if flash
		TestRunner.RENDER_DELAY = 0;
		emu.addListener( new TraceNotifier( Lib.current.loaderInfo ) );
		#else
		emu.addListener( new ConsoleNotifier( false ) );
		// emu.addListener( new BrowserUnitTestNotifier( "console" ) );
		//emu.addListener( new WebSocketNotifier( "ws://localhost:443" ) );
		#end
		
        emu.addTest( MachinaSuite );
        emu.run();
	}
}
