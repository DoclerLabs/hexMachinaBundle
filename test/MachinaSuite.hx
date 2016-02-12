package;

import hex.HexCoreSuite;
import hex.HexInjectSuite;
import hex.HexIoCSuite;
import hex.HexMVCSuite;
import hex.HexServiceSuite;
import hex.HexUnitSuite;
import hex.state.HexStateSuite;

/**
 * ...
 * @author Francis Bourre
 */
class MachinaSuite
{
	@Suite( "Machina suite" )
    public var list : Array<Class<Dynamic>> = [ HexUnitSuite, HexCoreSuite, HexInjectSuite, HexServiceSuite, HexMVCSuite, HexIoCSuite, HexStateSuite ];
}