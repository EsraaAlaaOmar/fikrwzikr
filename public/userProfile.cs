using System;
using System.Collections.Generic;

#nullable disable

namespace fekrwzekrApis.Model
{

    public partial class UserProfiles
    {
       public List<FurdDVView> _FurdDVView { get; set; }
        public List<SunahDVView> _SunahDVView { get; set; }
    }
    public partial class FurdDVView
    {
        public int UserID { get; set; }
    public string DATE { get; set; }
    public int? FAGRFU { get; set; }
    public int? DUHRFU { get; set; }
    public int? ASRFU { get; set; }
    public int? MAGFUIR { get; set; }
    public int? ISHAFUIR { get; set; }

}

public partial class SunahDVView
{
    public int UserID { get; set; }
    public string DATE { get; set; }
    public int? FAGRSO { get; set; }
    public int? DUHRSO { get; set; }
    public int? ASRSO { get; set; }
    public int? MAGSON { get; set; }
    public int? ISHASON { get; set; }


}
}
