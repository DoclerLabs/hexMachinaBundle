package;

import hex.unittest.runner.ExMachinaUnitCore;
import hex.unittest.runner.TestRunner;

/**
 * ...
 * @author Francis Bourre
 */
class MainMachinaTest
{
	static public function main() : Void
	{
		var emu = new ExMachinaUnitCore();

		#if travix
		emu.addListener( new hex.unittest.notifier.TravixNotifier( ) );
		#elseif flash
		TestRunner.RENDER_DELAY = 80;
		emu.addListener( new hex.unittest.notifier.TraceNotifier( flash.Lib.current.loaderInfo, false, true ) );
		#elseif (php && haxe_ver < 4.0)
		emu.addListener( new hex.unittest.notifier.TraceNotifier( false, true ) );
		#else
		emu.addListener( new hex.unittest.notifier.ConsoleNotifier( false, true ) );
		#end
		emu.addListener( new hex.unittest.notifier.ExitingNotifier() );
		
        emu.addTest( MachinaSuite );
        emu.run();
	}
}
