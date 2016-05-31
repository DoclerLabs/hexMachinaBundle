package;

import hex.unittest.notifier.TraceNotifier;
import hex.unittest.runner.ExMachinaUnitCore;
import hex.unittest.runner.TestRunner;
#if js
import hex.unittest.notifier.ConsoleNotifier;
#elseif flash
import flash.Lib;
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
		#elseif js
		emu.addListener( new ConsoleNotifier( false ) );
		#else
		emu.addListener( new TraceNotifier( false ) );
		#end
		
        emu.addTest( MachinaSuite );
        emu.run();
	}
}
